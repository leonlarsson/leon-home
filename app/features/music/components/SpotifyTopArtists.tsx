import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import { spotifySdk } from "../functions";

const getTopArtistsServerFn = createServerFn()
  .validator((range: "short_term" | "medium_term" | "long_term") => range)
  .handler(async (ctx) => {
    console.time("getTopArtistsServerFn");
    const result = await spotifySdk.currentUser.topItems("artists", ctx.data);
    console.timeEnd("getTopArtistsServerFn");

    return result;
  });

type Props = {
  range: "short_term" | "medium_term" | "long_term";
};

export const SpotifyTopArtists = ({ range }: Props) => {
  const getTopArtists = useServerFn(getTopArtistsServerFn);

  const query = useSuspenseQuery({
    queryKey: ["music", "topArtists", range],
    queryFn: () => getTopArtists({ data: range }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  const artists = query.data.items;
  if (!artists) return <span>No artists found.</span>;

  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3">
      {artists.map((artist) => (
        <Link
          key={artist.id}
          href={artist.external_urls.spotify}
          target="_blank"
          className="flex items-center gap-3 rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-300/10"
        >
          {/* Album image */}
          <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full">
            <img
              src={artist.images[0].url}
              className="relative h-full w-full shrink-0 object-cover"
              width={128}
              height={128}
              alt={artist.name}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col text-start">
            {/* Artist name */}
            <span className="text-lg font-semibold">{artist.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
