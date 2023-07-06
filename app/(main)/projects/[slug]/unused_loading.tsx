import Link from "next/link";

export default () => {
  return (
    <div className="page">
      <Link href="/projects" className="group text-[1.3rem] transition-all max-sm:text-base" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1 group-hover:text-red-400" /> Back
      </Link>

      <div className="px-16 max-sm:px-4">
        <span className="text-[2rem] font-extrabold transition-all max-sm:text-2xl">Loading name...</span>

        <p className="whitespace-pre-line">Loading description...</p>

        <div className="mb-3 mt-1 flex flex-wrap justify-center gap-1">
          <div className="tag-pill">LOADING</div>
          <div className="tag-pill">TAGS</div>
        </div>

        <span className="text-lg font-bold">Links:</span>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="button-with-border">Loading link...</span>
          <span className="button-with-border">Loading link...</span>
        </div>
      </div>

      <details className="m-auto my-5 rounded border border-black transition-colors open:bg-black open:text-white hover:bg-black hover:text-white dark:border-kinda-white/50 dark:open:bg-transparent dark:hover:border-kinda-white dark:hover:bg-transparent max-xl:min-w-[70vw] lg:w-[80vw] 2xl:w-[1300px]">
        <summary className="cursor-pointer p-2 text-lg font-semibold">Preview</summary>
        <span>Loading preview...</span>
      </details>
    </div>
  );
};
