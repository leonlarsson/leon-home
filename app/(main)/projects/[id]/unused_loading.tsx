import Link from "next/link";

export default () => {
  return (
    <div className="page">
      <Link href="/projects" className="group text-[1.3rem] transition-all duration-300 max-sm:text-base" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1 group-hover:text-red-400 group-active:-translate-x-2 group-active:text-red-600" /> Back to list
      </Link>

      <div className="px-16 max-sm:px-4">
        <span className="text-[2rem] font-extrabold transition-all duration-300 max-sm:text-2xl">Loading name...</span>

        <p className="mb-3 whitespace-pre-line">Loading description...</p>

        <span className="text-lg font-bold">Links:</span>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="project-page-link">Loading link...</span>
          <span className="project-page-link">Loading link...</span>
        </div>
      </div>

      <details className="m-auto my-5 rounded border border-black p-2 transition-colors open:bg-black open:text-white hover:bg-black hover:text-white max-xl:min-w-[70vw] lg:w-[80vw] 2xl:w-[1300px]">
        <summary className="cursor-pointer text-lg font-semibold">Try it</summary>
        Loading iframe...
      </details>
    </div>
  );
};
