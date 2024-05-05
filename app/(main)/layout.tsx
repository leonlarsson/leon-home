import Header from "./components/Header";
import "./main-style.css";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`min-h-[100svh] bg-kinda-white text-black dark:bg-kinda-black dark:text-kinda-white`}
    >
      <Header />
      {/* Below 510px (no header) width, add bottom margin to accomodate the bottom overlay header. Add relative if issues occur */}
      {/* Also below 510px width, add some padding to the top */}
      <div className="container mx-auto px-4 pb-28 pt-3 text-center transition-all min-[510px]:pb-10 min-[510px]:pt-0">
        {children}
      </div>
    </div>
  );
};
