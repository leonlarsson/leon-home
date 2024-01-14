type Props = {
  locale: string;
  start: string;
  end?: string;
};

export default ({ locale, start, end }: Props) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const durationInDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <span className="text-xs text-neutral-600" title={`${durationInDays.toLocaleString(locale)} ${locale === "en" ? "days" : "dagar"} ${!!!end ? (locale === "en" ? "and counting" : "och pågår") : ""}`}>
      {start.slice(0, 4)} {locale === "en" ? "-" : "–"} {end?.slice(0, 4) ?? (locale === "en" ? "Present" : "Nuvarande")}
    </span>
  );
};
