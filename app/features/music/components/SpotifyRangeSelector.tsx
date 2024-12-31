import Icons from "@/features/icons/icons";
import { getRouteApi } from "@tanstack/react-router";
import { useTransition } from "react";

export const SpotifyRangeSelector = () => {
  const { useNavigate, useSearch } = getRouteApi("/_main/music");
  const navigate = useNavigate();
  const { range } = useSearch();
  const [pending, startTransition] = useTransition();

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      navigate({
        search: () => ({
          range: value !== "medium_term" ? (value as "short_term" | "medium_term" | "long_term") : undefined,
        }),
      });
    });
  };

  return (
    <div>
      <label className="flex select-none items-center gap-1" htmlFor="select">
        Select a range for top tracks and artists:{" "}
        {pending && <Icons.arrowRotate className="inline size-4 animate-spin" />}
      </label>

      <select
        className="card mt-1 w-full outline-none disabled:cursor-not-allowed"
        id="select"
        defaultValue={range ?? "medium_term"}
        disabled={pending}
        onChange={onChange}
      >
        <option value="short_term">Last 4 weeks</option>
        <option value="medium_term">Last 6 months</option>
        <option value="long_term">Long term</option>
      </select>
    </div>
  );
};
