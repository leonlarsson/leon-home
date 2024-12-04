import { getRouteApi } from "@tanstack/react-router";

export const ProjectSortCheckbox = () => {
  const { useNavigate, useSearch } = getRouteApi("/_main/projects/");
  const { sort } = useSearch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center gap-1">
      <input
        className="peer h-4 w-4 cursor-pointer accent-black dark:accent-kinda-white"
        type="checkbox"
        id="sort"
        defaultChecked={sort === "newest"}
        onChange={(e) => {
          const checked = e.target.checked;
          navigate({
            search: (prev) => ({
              ...prev,
              sort: checked ? "newest" : undefined,
            }),
          });
        }}
      />
      <label
        className="select-none underline-offset-2 opacity-80 transition-opacity peer-checked:underline peer-checked:opacity-100"
        htmlFor="sort"
      >
        Sort by newest
      </label>
    </div>
  );
};
