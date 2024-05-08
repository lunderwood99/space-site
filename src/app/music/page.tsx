import React, { FunctionComponent } from "react";

import { MusicEntry, MusicFormat } from "./components/MusicEntry/MusicEntry";

import { fetchSpotifyApiToken, fetchArtistAlbums } from "./routes/routes";
import { ArtistAlbumsResponse, SpotifyApiTokenResponse } from "./routes/routes.types";

export interface MusicProps {}

async function getArtistAlbums() {
  const fetchSpotifyApiTokenResponse: SpotifyApiTokenResponse = await fetchSpotifyApiToken()
  const fetchArtistAlbumsResponse: ArtistAlbumsResponse = await fetchArtistAlbums(fetchSpotifyApiTokenResponse.access_token)

  return fetchArtistAlbumsResponse
}

const Music: FunctionComponent<MusicProps> = async () => {
  const albums = await getArtistAlbums()

  return(
    <>
      <MusicEntry title='Slipperscree' musicFormat={MusicFormat.SINGLE}/>
    </>
  )
}

export default Music