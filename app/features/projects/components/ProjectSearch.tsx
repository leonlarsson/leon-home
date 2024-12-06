import { GradientBorder } from "@/features/common/GradientBorder";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const ProjectSearch = () => {
  const { useNavigate, useSearch } = getRouteApi("/_main/projects/");
  const { search } = useSearch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(search || "");

  useEffect(() => {
    setInputValue(search || "");
  }, [search]);

  return (
    <GradientBorder rounded="5px" padding="1px">
      <input
        type="search"
        maxLength={20}
        placeholder="Name, description, year, tags..."
        className="text-input-base w-full"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value.trim();
          setInputValue(value);

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
