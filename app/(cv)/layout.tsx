import "./cv-style.css";

export default ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto min-h-[100svh] max-w-3xl px-4 pb-10 pt-2 lg:pt-12">{children}</div>;
};
