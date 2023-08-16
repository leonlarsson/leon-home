import Link from "next/link";
import Image from "next/image";
import { getTopArtists } from "../lib/actions";

export default async () => {
  const topArtistsObject = await getTopArtists();
  const artists = topArtistsObject ? (topArtistsObject.items as SpotifyApi.ArtistObjectFull[]) : [];

  return (
    <div className="flex flex-wrap gap-2">
      {artists.map(artist => (
        <Link href={artist.external_urls.spotify} target="_blank" className="group flex items-center gap-3 rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-300/10">
          {/* Album image */}
          <Image src={artist.images[0].url} className="rounded" alt={`Image for '${artist.name}'`} width={50} height={50} loading="lazy" />

          <div className="flex flex-col text-start">
            {/* Artist name */}
            <span className="text-lg font-semibold group-hover:underline">{artist.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
