import { useQuery } from "@tanstack/react-query";
import { createServerFn, useServerFn } from "@tanstack/start";

type Props = {
  range: string;
  hideSpotifyURI?: boolean;
};

const getServerTime = createServerFn({ method: "GET" }).handler(async () => {
  return new Date().toISOString();
});

export const SpotifyTopTracks = ({ range, hideSpotifyURI }: Props) => {
  const getTopTracksFunc = useServerFn(getServerTime);

  const query = useQuery({
    queryKey: ["topTracks", range],
    queryFn: () => getTopTracksFunc(),
  });

  if (!query.isSuccess) {
    return <div>Loading...</div>;
  }

  return <div>{query.data}</div>;
};
