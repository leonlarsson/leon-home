"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { desc, eq, isNotNull } from "drizzle-orm";
import { db } from "@/db";
import { entries } from "@/db/schema";
import { GuestbookEntry } from "@/types";

export const getEntriesCount = async (
  namedEntriesOnly: boolean,
): Promise<number | false> => {
  try {
    // Get a count of all entries that are not deleted
    const result = await db.$count(
      entries,
      namedEntriesOnly ? isNotNull(entries.name) : undefined,
    );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getEntries = async (
  namedEntriesOnly: boolean,
): Promise<GuestbookEntry[] | null> => {
  try {
    // Get all entries that are not deleted, sorted by date, limited to 100
    const result = await db
      .select()
      .from(entries)
      .where(namedEntriesOnly ? isNotNull(entries.name) : undefined)
      .orderBy(desc(entries.date))
      .limit(100);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postEntry = async (
  message: string,
  name?: string,
): Promise<boolean | "ratelimited"> => {
  if (!message.trim()) return false;

  // Validate message
  let { passed: messagePassed, trimmedString: trimmedMessage } = validateString(
    message,
    100,
  );
  if (!messagePassed) return false;

  // Validate name
  let { passed: namePassed, trimmedString: trimmedName } = validateString(
    name ?? "",
    50,
  );
  if (!namePassed) return false;

  // Cloudflare header because we're behind Cloudflare
  const ip = headers().get("cf-connecting-ip") ?? "127.0.0.1";
  const lastEntryByIp = await db.query.entries.findFirst({
    orderBy: desc(entries.date),
    where: eq(entries.ip, ip),
  });

  const isSameBody = lastEntryByIp?.body === trimmedMessage;
  const isWithinHour =
    lastEntryByIp &&
    lastEntryByIp?.date.getTime() > Date.now() - 1000 * 60 * 30;

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
      ip,
    });

    revalidatePath("/guestbook");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const validateString = (
  string: string,
  maxLength: number,
): { passed: boolean; trimmedString: string } => {
  // Trim
  const trimmedString = string?.trim();

  // Validate existance and length
  if (!trimmedString || trimmedString.length > maxLength)
    return { passed: false, trimmedString };

  // Validate content
  if (
    ["﷽", "𒐫", "𒈙", "⸻", "꧅", "ဪ", "௵", "௸", "​", "‮"].some(x =>
      trimmedString.includes(x),
    )
  )
    return { passed: false, trimmedString };

  return { passed: true, trimmedString };
};
