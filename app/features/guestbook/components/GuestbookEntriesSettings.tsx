import { getRouteApi } from "@tanstack/react-router";

export const GuestbookEntriesSettings = () => {
  const { useNavigate, useSearch } = getRouteApi("/_main/guestbook");
  const navigate = useNavigate();
  const { named, showTimestamps } = useSearch();

  return (
    <div className="flex flex-wrap">
      <div className="me-3 flex items-center gap-1">
        <input
          className="peer h-4 w-4 cursor-pointer accent-black dark:accent-kinda-white"
          type="checkbox"
          id="named"
          defaultChecked={!!named}
          onChange={(ev) => {
            const checked = ev.target.checked;
            navigate({
              search: (prev) => ({
                ...prev,
                named: checked ? true : undefined,
              }),
            });
          }}
        />
        <label
          className="select-none underline-offset-2 opacity-80 transition-opacity peer-checked:underline peer-checked:opacity-100"
          htmlFor="named"
        >
          Show only named entries
        </label>
      </div>

      <div className="flex items-center gap-1">
        <input
          className="peer h-4 w-4 cursor-pointer accent-black dark:accent-kinda-white"
          type="checkbox"
          id="timestamps"
          defaultChecked={!!showTimestamps}
          onChange={(ev) => {
            const checked = ev.target.checked;
            navigate({
              search: (prev) => ({
                ...prev,
                showTimestamps: checked ? true : undefined,
              }),
            });
          }}
        />
        <label
          className="select-none underline-offset-2 opacity-80 transition-opacity peer-checked:underline peer-checked:opacity-100"
          htmlFor="timestamps"
        >
          Show timestamps
        </label>
      </div>
    </div>
  );
};
