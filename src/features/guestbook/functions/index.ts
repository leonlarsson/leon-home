import { getBindings } from "@/utils/bindings";
import { createServerFn } from "@tanstack/react-start";
import { getCookie, getHeader } from "@tanstack/react-start/server";
import { desc, eq, isNotNull } from "drizzle-orm";
import { getDb } from "../../../db";
import { entries } from "../../../db/schema";
import type { GuestbookEntryWithoutIp } from "../../../types";

export const $getGuestbookEntries = createServerFn()
  .validator((data: { namedEntriesOnly: boolean }) => data)
  .handler(async (ctx) => {
    const [entries, entriesCount] = await Promise.all([
      getEntries(ctx.data.namedEntriesOnly),
      getEntriesCount(ctx.data.namedEntriesOnly),
    ]);

    return {
      entries,
      entriesCount,
    };
  });

export const $postGuestbookEntry = createServerFn({ method: "POST" })
  .validator((data: { name: string; message: string }) => data)
  .handler(async (ctx) => {
    const { name, message } = ctx.data;
    const postWasOk = await postEntry(message, name);
    return postWasOk;
  });

const getEntriesCount = async (namedEntriesOnly: boolean): Promise<number> => {
  const db = await getDb();
  try {
    // Get a count of all entries that are not deleted
    const result = await db.$count(entries, namedEntriesOnly ? isNotNull(entries.name) : undefined);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const getEntries = async (namedEntriesOnly: boolean): Promise<GuestbookEntryWithoutIp[]> => {
  const db = await getDb();
  try {
    // Get all entries that are not deleted, sorted by date, limited to 100
    const result = await db.query.entries.findMany({
      columns: {
        id: true,
        body: true,
        name: true,
        date: true,
        isAdmin: true,
      },
      where: namedEntriesOnly ? isNotNull(entries.name) : undefined,
      orderBy: desc(entries.date),
      limit: 100,
    });

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const postEntry = async (message: string, name?: string): Promise<boolean | "ratelimited"> => {
  const db = await getDb();
  const { GUESTBOOK_ADMIN_KEY } = getBindings();
  const adminCookie = getCookie("leonhome_guestbook_key");

  if (!message.trim()) return false;

  // Validate message
  const { passed: messagePassed, trimmedString: trimmedMessage } = validateString(message, 100);
  if (!messagePassed) return false;

  // Validate name
  const { passed: namePassed, trimmedString: trimmedName } = validateString(name ?? "", 50);
  if (!namePassed) return false;

  // Cloudflare header because we're behind Cloudflare
  const ip = getHeader("cf-connecting-ip") ?? "127.0.0.1";

  const lastEntryByIp = await db.query.entries.findFirst({
    orderBy: desc(entries.date),
    where: eq(entries.ip, ip),
  });

  const isSameBody = lastEntryByIp?.body === trimmedMessage;
  const isWithinHour = lastEntryByIp && new Date(lastEntryByIp.date).getTime() > Date.now() - 1000 * 60 * 30;

  // Reject if the last entry by this IP...
  // a) is the same as the current message
  // b) was made less than 30 minutes ago
  if (isSameBody || isWithinHour) {
    return "ratelimited";
  }

  try {
    await db.insert(entries).values({
      body: trimmedMessage,
      name: trimmedName,
      isAdmin: GUESTBOOK_ADMIN_KEY.length > 0 && adminCookie === GUESTBOOK_ADMIN_KEY,
      ip,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const validateString = (string: string, maxLength: number): { passed: boolean; trimmedString: string } => {
  // Trim
  const trimmedString = string?.trim();

  // Validate existance and length
  if (!trimmedString || trimmedString.length > maxLength) return { passed: false, trimmedString };

  // Validate content
  if (["﷽", "𒐫", "𒈙", "⸻", "꧅", "ဪ", "௵", "௸", "​", "‮"].some((x) => trimmedString.includes(x)))
    return { passed: false, trimmedString };

  return { passed: true, trimmedString };
};
