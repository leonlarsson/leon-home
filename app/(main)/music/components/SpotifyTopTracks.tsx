import Link from "next/link";
import Image from "next/image";
import { getTopTracks } from "../lib/actions";
import formatDuration from "../lib/formatDuration";

type Props = {
  range: string;
  hideSpotifyURI?: boolean;
};

export default async ({ range, hideSpotifyURI }: Props) => {
  const topTracksObject = await getTopTracks(range);
  const tracks = topTracksObject ? (topTracksObject.items as SpotifyApi.TrackObjectFull[]) : [];

  return (
    <div className="flex flex-col gap-1">
      {tracks.map(track => (
        <div key={track.id} className="flex items-center gap-4 rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-300/10">
          {/* Album image */}
          <Image src={track.album.images[1].url} className="rounded" alt={`Album art for '${track.album.name}'`} width={50} height={50} loading="lazy" />

          <div className="flex w-full flex-col text-start">
            <div className="flex items-center justify-between">
              {/* Track name */}
              <span className="text-lg font-semibold">
                <Link href={track.external_urls.spotify} target="_blank" className="hover:underline">
                  {track.name}
                </Link>
                {!hideSpotifyURI && (
                  <Link href={track.uri} target="_blank" title="Open in Spotify" className="hover:underline">
                    <i className="fa-brands fa-spotify ms-2" />
                  </Link>
                )}
              </span>

              <span className="text-sm text-neutral-700 dark:text-neutral-300">{formatDuration(track.duration_ms)}</span>
            </div>

            {/* Artist names */}
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {track.artists
                .map<React.ReactNode>(artist => (
                  <span key={artist.id}>
                    <Link href={artist.external_urls.spotify} target="_blank" className="hover:underline">
                      {artist.name}
                    </Link>
                  </span>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
