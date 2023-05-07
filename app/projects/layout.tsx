import "../globals.css";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col text-center m-auto">
            {children}
        </div>
    );
}