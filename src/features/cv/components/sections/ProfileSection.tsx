import { Fragment } from "react/jsx-runtime";
import type { CVLocale, CVProfileSection } from "../../../../types";
import Icons from "../../../icons/icons";
import { CVCurrentTime } from "../CurrentTime";
import { CVPrintButton } from "../PrintButton";

export const ProfileSection = ({
  data,
  locale,
}: {
  data: CVProfileSection;
  locale: CVLocale;
}) => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-xl font-bold min-[400px]:text-2xl">{data.name}</h1>
          <p className="font-mono text-sm text-neutral-600">{data.tagline[locale]}</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1">
          {data.url && (
            <a
              href={data.url.href}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-2 font-mono text-xs text-neutral-600 hover:underline"
            >
              <Icons.link className="size-4" /> {data.url.text}
            </a>
          )}

          {data.location && (
            <a
              href={data.location.href}
              target="_blank"
              rel="noreferrer"
              className="w-fit font-mono text-xs text-neutral-600 hover:underline"
            >
              <span className="flex items-center gap-2">
                <Icons.map className="size-4 shrink-0" />
                <span>
                  {data.location.text[locale]},{" "}
                  {
                    new Intl.DateTimeFormat(locale, {
                      timeZone: data.location.timezone,
                      timeZoneName: "shortOffset",
                    })
                      .formatToParts()
                      .find((x) => x.type === "timeZoneName")!.value
                  }{" "}
                  {data.location.timezone && <CVCurrentTime locale={locale} timeZone={data.location.timezone} />}
                </span>
              </span>
            </a>
          )}
        </div>

        {/* Icon Links */}
        {data.iconLinks?.length && (
          <div className="flex gap-1">
            {data.iconLinks.map(({ icon, href, text }, i) => {
              return (
                <Fragment key={text}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={text}
                    className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100"
                  >
                    {icon}
                  </a>

                  {/* Show print button if last index and enabled */}
                  {i === data.iconLinks!.length! - 1 && data.showPrintButton && (
                    <CVPrintButton
                      title="Print this page"
                      className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100 print:hidden"
                    >
                      <Icons.print className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
                    </CVPrintButton>
                  )}
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
      {data.avatar && (
        <img className="hidden rounded-xl sm:block" src={data.avatar} alt={data.name} width={100} height={100} />
      )}
    </div>
  );
};
