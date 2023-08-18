"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div>
      <span>Select a range for top tracks and artists:</span>
      <div className="mt-1 flex flex-wrap gap-2">
        {/* <select className="rounded p-2" name="Hello" onChange={e => router.replace(e.target.value !== "medium_term" ? `?range=${e.target.value}` : "?")}>
        <option value="short_term">Short term</option>
        <option value="medium_term">Medium term</option>
        <option value="long_term">Long term</option>
      </select> */}

        {/* <div>
        <label htmlFor="short">Short term</label>
        <input type="radio" name="range" id="short" />
        </div>
        
        <div>
        <label htmlFor="medium">Medium term</label>
        <input type="radio" name="range" id="medium" checked defaultChecked={true} />
        </div>
        
        <div>
        <label htmlFor="long">Long term</label>
        <input type="radio" name="range" id="long" />
      </div> */}

        <button className={`button-with-border transition-all disabled:cursor-not-allowed ${searchParams.get("range") === "short_term" ? "font-bold dark:border-kinda-white" : ""}`} onClick={() => router.replace("?range=short_term")} disabled={searchParams.get("range") === "short_term"}>
          Last 4 weeks
        </button>
        <button className={`button-with-border transition-all disabled:cursor-not-allowed ${!searchParams.get("range") ? "font-bold dark:border-kinda-white" : ""}`} onClick={() => router.replace("?")} disabled={!searchParams.get("range")}>
          Last 6 months
        </button>
        <button className={`button-with-border transition-all disabled:cursor-not-allowed ${searchParams.get("range") === "long_term" ? "font-bold dark:border-kinda-white" : ""}`} onClick={() => router.replace("?range=long_term")} disabled={searchParams.get("range") === "long_term"}>
          Long term
        </button>
      </div>
    </div>
  );
};
