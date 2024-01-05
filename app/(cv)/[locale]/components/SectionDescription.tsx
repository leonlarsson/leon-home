import Link from "next/link";

// Takes an array of strings and returns a list of paragraphs
export default ({ description }: { description?: string[] }) => {
  if (!description) return null;
  return description.map(text => (
    <p key={text} className="font-geist-mono text-xs text-neutral-600">
      {linkify(text)}
    </p>
  ));
};

// Turns markdown links into HTML links
const linkify = (text: string) => {
  const parts = text.split(/\[([^\]]+)]\(([^)]+)\)/);

  const elements = parts.map((part, index) => {
    if (index % 3 === 1) {
      // This is the link text
      return (
        <Link key={index} href={parts[index + 1]} target="_blank" className="link">
          {part}
        </Link>
      );
    } else if (index % 3 === 2) {
      // This is the link URL, ignore
      return null;
    } else {
      // This is regular text
      return part;
    }
  });

  return elements;
};
