import "../globals.css";

export default ({ children }: { children: React.ReactNode }) => {
  return <div className="m-auto flex flex-col">{children}</div>;
};
