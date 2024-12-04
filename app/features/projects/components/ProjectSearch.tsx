import { getRouteApi } from "@tanstack/react-router";
import { GradientBorder } from "@/features/common/GradientBorder";

export const ProjectSearch = () => {
  const { useNavigate, useSearch } = getRouteApi("/_main/projects/");
  const { search } = useSearch();
  const navigate = useNavigate();

  return (
    <GradientBorder rounded="5px" padding="1px">
      <input
        type="search"
        maxLength={20}
        placeholder="Name, description, year, tags..."
        className="text-input-base w-full"
        defaultValue={search}
        onChange={(e) => {
          const value = e.target.value.trim();

          // If value is not empty, set searchParam. Otherwise, remove the searchParam. Then replace the URL params
          navigate({
            search: (prev) => ({
              ...prev,
              search: value || undefined,
            }),
          });
        }}
      />
    </GradientBorder>
  );
};
