import Link from "next/link";

export default () => {
  return (
    <div className="m-auto">
      <div className="text-3xl font-extrabold transition-all max-[450px]:text-2xl">My CV / Resume</div>
      <span className="mb-3">My CV / Resume is available in both English and Swedish.</span>

      <div className="mt-2 flex flex-wrap justify-center gap-1">
        <Link href="/cv" className="button-with-border" draggable={false}>
          <i className="fa-solid fa-file-text" /> Go to English CV
        </Link>
        <Link href="/cv-swe" className="button-with-border" draggable={false}>
          <i className="fa-solid fa-file-text" /> Go to Swedish CV
        </Link>
      </div>
    </div>
  );
};
