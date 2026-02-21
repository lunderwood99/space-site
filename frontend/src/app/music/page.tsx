import React, { FunctionComponent } from "react";

import { MusicTable } from "./components/MusicTable/MusicTable";

import { fetchSpotifyApiToken, fetchArtistAlbums } from "./routes/routes";
import {
  ArtistAlbumsResponse,
  SpotifyApiTokenResponse,
} from "./routes/routes.types";
import { StreamingServiceHeader } from "./components/StreamingServiceHeader/StreamingServiceHeader";

export interface MusicProps { }

async function getArtistAlbums() {
  const fetchSpotifyApiTokenResponse: SpotifyApiTokenResponse =
    await fetchSpotifyApiToken();
  const fetchArtistAlbumsResponse: ArtistAlbumsResponse =
    await fetchArtistAlbums(fetchSpotifyApiTokenResponse.access_token);

  return fetchArtistAlbumsResponse;
}

const Music: FunctionComponent<MusicProps> = async () => {
  const artistAlbumsResponse = await getArtistAlbums();

  return (
    <div className="flex justify-center flex-col mb-auto mt-4 w-full border-t-2 border-white">
      <div className="flex justify-end w-full mobile:font-xs">
        <StreamingServiceHeader
          bandcampUrl={process.env.NEXT_PUBLIC_BANDCAMP_URL}
          spotifyUrl={process.env.NEXT_PUBLIC_SPOTIFY_URL}
          tidalUrl={process.env.NEXT_PUBLIC_TIDAL_URL}
          appleMusicUrl={process.env.NEXT_PUBLIC_APPLE_MUSIC_URL}
        />
      </div>
      <MusicTable albums={artistAlbumsResponse.items} />
    </div>
  );
};

export default Music;
