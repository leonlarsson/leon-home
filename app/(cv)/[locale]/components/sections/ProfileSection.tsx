import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import CurrentTime from "../CurrentTime";
import PrintButton from "../PrintButton";
import { CVIcon, CVLocale, CVProfileSection } from "@/types";

export const ProfileSection = ({ data, locale }: { data: CVProfileSection; locale: CVLocale }) => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-xl font-bold min-[400px]:text-2xl">{data.name}</h1>
          <p className="font-geist-mono text-sm text-neutral-600">{data.tagline[locale]}</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1">
          {data.url && (
            <Link href={data.url.href} target="_blank" className="flex w-fit items-center gap-1 font-geist-mono text-xs text-neutral-600 hover:underline">
              <Icons.link className="size-4" /> {data.url.text}
            </Link>
          )}

          {data.location && (
            <Link href={data.location.href} target="_blank" className="w-fit font-geist-mono text-xs text-neutral-600 hover:underline">
              <span className="flex items-center gap-1">
                <Icons.map className="size-4 shrink-0" />
                <span>
                  {data.location.text[locale]}, {new Intl.DateTimeFormat(locale, { timeZone: data.location.timezone, timeZoneName: "shortOffset" }).formatToParts().find(x => x.type === "timeZoneName")!.value}{" "}
                  {data.location.timezone && <CurrentTime locale={locale} timeZone={data.location.timezone} />}
                </span>
              </span>
            </Link>
          )}
        </div>

        {/* Icon Links */}
        {data.iconLinks?.length && (
          <div className="flex gap-1">
            {data.iconLinks.map(({ icon, href, text }, i) => {
              return (
                <Fragment key={i}>
                  <Link href={href} target="_blank" title={text} className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100">
                    {icon}
                  </Link>

                  {/* Show print button if last index and enabled */}
                  {i === data.iconLinks!.length! - 1 && data.showPrintButton && (
                    <PrintButton title="Print this page" className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100 print:hidden">
                      <Icons.print className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
                    </PrintButton>
                  )}
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
      {data.avatar && <Image className="hidden rounded-xl sm:block" src={data.avatar} alt={data.name} width={100} height={100} priority placeholder="blur" />}
    </div>
  );
};
