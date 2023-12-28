import NextTopLoader from "nextjs-toploader";
import Header from "./components/Header";
import "./main-style.css";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`min-h-[100svh] bg-gradient-to-bl from-white to-slate-200 text-black dark:from-kinda-black dark:to-kinda-black dark:text-kinda-white`}>
      <NextTopLoader showSpinner={false} color="#0076ff" />
      <Header />
      {/* Below 460px (no header) width, add bottom margin to accomodate the bottom overlay header. Add relative if issues occur */}
      {/* Also below 460px width, add some padding to the top */}
      <div className="container mx-auto px-4 pb-10 text-center transition-all max-[460px]:pb-28 max-[460px]:pt-3">{children}</div>
    </div>
  );
};
