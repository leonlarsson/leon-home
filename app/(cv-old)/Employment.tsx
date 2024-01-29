export default ({
  title,
  company,
  companyUrl,
  date,
  children,
}: {
  title: string;
  company: string;
  companyUrl: string;
  date: string;
  children: JSX.Element;
}) => {
  return (
    <div className="small-segment-holder">
      <span className="datum">{date}</span>
      <span className="namn">
        <a href={companyUrl} target="_blank">
          {company}
        </a>
      </span>
      <span className="titel">{title}</span>
      <span className="text">{children}</span>
    </div>
  );
};
