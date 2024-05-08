import React, { FunctionComponent } from "react";

import { MusicTable } from "./components/MusicTable/MusicTable";

import { fetchSpotifyApiToken, fetchArtistAlbums } from "./routes/routes";
import { ArtistAlbumsResponse, SpotifyApiTokenResponse } from "./routes/routes.types";

export interface MusicProps {}

async function getArtistAlbums() {
  const fetchSpotifyApiTokenResponse: SpotifyApiTokenResponse = await fetchSpotifyApiToken()
  const fetchArtistAlbumsResponse: ArtistAlbumsResponse = await fetchArtistAlbums(fetchSpotifyApiTokenResponse.access_token)

  return fetchArtistAlbumsResponse
}

const Music: FunctionComponent<MusicProps> = async () => {
  const artistAlbumsResponse = await getArtistAlbums()

  return(
    <>
      <MusicTable albums={artistAlbumsResponse.items}/>
    </>
  )
}

export default Music