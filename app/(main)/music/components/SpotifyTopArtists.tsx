import Link from "next/link";
import Image from "next/image";
import { getTopArtists } from "../lib/actions";

type Props = {
  range: string;
};

export default async ({ range }: Props) => {
  const topArtistsObject = await getTopArtists(range);
  const artists = topArtistsObject?.items;
  if (!artists) return <span>No artists found.</span>;

  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3">
      {artists.map(artist => (
        <Link key={artist.id} href={artist.external_urls.spotify} target="_blank" className="flex items-center gap-3 rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-300/10">
          {/* Album image */}
          <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full">
            <Image src={artist.images[0].url} className="relative h-full w-full shrink-0 object-cover" width={128} height={128} alt={`Image for '${artist.name}'`} loading="lazy" />
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
