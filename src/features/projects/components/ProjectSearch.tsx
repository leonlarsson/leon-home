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
    <input
      type="search"
      maxLength={20}
      placeholder="Name, description, year, tags..."
      className="text-input w-full"
      value={inputValue}
      onChange={(e) => {
        const value = e.target.value;
        if (value === " ") return;
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
  );
};
