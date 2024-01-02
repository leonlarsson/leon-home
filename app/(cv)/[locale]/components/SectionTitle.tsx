import Link from "next/link";

// Takes a string and returns a title with an optional url
export default ({ title, url }: { title: string; url?: string }) => {
  return url ? (
    <Link href={url} target="_blank" className="w-fit text-xl font-bold underline decoration-1 underline-offset-2 hover:decoration-2">
      {title}
    </Link>
  ) : (
    <h2 className="text-xl font-bold underline decoration-1 underline-offset-2">{title}</h2>
  );
};
