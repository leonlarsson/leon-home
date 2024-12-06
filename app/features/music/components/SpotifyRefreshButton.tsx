import Icons from "@/features/icons/icons";
import { useQueryClient } from "@tanstack/react-query";
import { useTransition } from "react";

export default () => {
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
      <Icons.arrowRotate className={`size-6 ${pending ? "animate-spin" : ""}`} />
    </button>
  );
};
