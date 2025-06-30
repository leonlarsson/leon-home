import { useQueryClient } from "@tanstack/react-query";
import { useTransition } from "react";
import { cn } from "../../../utils/cn";
import Icons from "../../icons/icons";

export const SpotifyRefreshButton = () => {
  const [pending, startTransition] = useTransition();
  const queryClient = useQueryClient();

  return (
    <button
      type="button"
      title="Click to refresh."
      onClick={() =>
        startTransition(() => {
          queryClient.invalidateQueries({ queryKey: ["music", "currentlyPlayingTrack"] });
        })
      }
    >
      <Icons.arrowRotate className={cn("size-6", pending && "animate-spin")} />
    </button>
  );
};
