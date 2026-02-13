import React, { FunctionComponent } from "react";

import { MusicTable } from "./components/MusicTable/MusicTable";

import { fetchSpotifyApiToken, fetchArtistAlbums } from "./routes/routes";
import {
  ArtistAlbumsResponse,
  SpotifyApiTokenResponse,
} from "./routes/routes.types";
import { StreamingServiceHeader } from "../components/molecules/StreamingServiceHeader/StreamingServiceHeader";

export interface MusicProps {}

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
    <div className="mt-4 w-full border-t-2 border-white min-w-[400px] overflow-hidden">
      <div className="flex justify-end w-full pr-8">
        <StreamingServiceHeader
          bandcampUrl={"https://yourbandcamp.com"}
          spotifyUrl={"https://yourspotify.com"}
          tidalUrl={"https://yourtidal.com"}
        />
      </div>
      <MusicTable albums={artistAlbumsResponse.items} />
    </div>
  );
};

export default Music;
