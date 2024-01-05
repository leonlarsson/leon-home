import Link from "next/link";

// Takes a string and returns a title with an optional url
export default ({ title, url }: { title: string; url?: string }) => {
  return url ? (
    <Link href={url} target="_blank" className="link w-fit text-xl font-bold">
      {title}
    </Link>
  ) : (
    <h2 className="text-xl font-bold">{title}</h2>
  );
};
