import Icons from "../../icons/icons";

type SpotifyTopTracksPlaceholderProps = {
  amount: number;
};

export const SpotifyTopTracksPlaceholder = (props: SpotifyTopTracksPlaceholderProps) => (
  <div className="flex flex-col">
    {Array.from({ length: props.amount }).map((_, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: It's fine
      <div key={i} className="group flex items-center gap-4 rounded p-2 hover:bg-neutral-200 dark:hover:bg-gray-300/10">
        {/* Track number / play button */}
        <div className="ms-2 w-6 shrink-0 text-center text-neutral-700 max-[380px]:hidden dark:text-neutral-300">
          <span className="group-hover:hidden">{i + 1}</span>
          <span title="Open in Spotify" className="hidden group-hover:block">
            <Icons.play className="size-6" />
          </span>
        </div>

        {/* Album image */}
        <div className="shrink-0 size-[55px] bg-neutral-300 dark:bg-gray-300/10" />

        <div className="flex flex-1 flex-col text-start">
          {/* Track name */}
          <div className="space-x-2">
            <span className="text-lg font-semibold">Track name</span>
          </div>

          {/* Artist names */}
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span>Artist name</span>
          </div>
        </div>

        {/* Track progress */}
        <span className="text-right text-sm text-neutral-700 max-[380px]:hidden dark:text-neutral-300 tabular-nums">
          0:00
        </span>
      </div>
    ))}
  </div>
);
