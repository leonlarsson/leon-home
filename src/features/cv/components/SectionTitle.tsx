// Takes a string and returns a title with an optional url
export const CVSectionTitle = ({ title, url }: { title: string; url?: string }) => {
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" className="link w-fit text-xl font-bold">
      {title}
    </a>
  ) : (
    <h2 className="text-xl font-bold">{title}</h2>
  );
};
