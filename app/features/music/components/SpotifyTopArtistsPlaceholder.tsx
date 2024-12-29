type SpotifyTopArtistsPlaceholderProps = {
  amount: number;
};

export const SpotifyTopArtistsPlaceholder = (props: SpotifyTopArtistsPlaceholderProps) => (
  <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3">
    {Array.from({ length: props.amount }).map((_, i) => (
      <div
        // biome-ignore lint/suspicious/noArrayIndexKey: It's fine
        key={i}
        className="flex items-center gap-3 rounded p-2 hover:bg-neutral-200 dark:hover:bg-gray-300/10"
      >
        {/* Album image */}
        <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full">
          <div className="relative h-full w-full shrink-0 object-cover size-[128px] bg-neutral-300 dark:bg-gray-300/10" />
        </div>

        <div className="flex flex-col text-start">
          {/* Artist name */}
          <span className="text-lg font-semibold">Artist name</span>
        </div>
      </div>
    ))}
  </div>
);
