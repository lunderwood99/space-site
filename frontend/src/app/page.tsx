"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import { fetchArtistAlbums, fetchSpotifyApiToken } from "./music/routes/routes";
import {
  Album,
  ArtistAlbumsResponse,
  SpotifyApiTokenResponse,
} from "./music/routes/routes.types";

import { LatestRelease } from "./components/molecules/LatestRelease/LatestRelease";
import { StreamingServiceHeader } from "./components/molecules/StreamingServiceHeader/StreamingServiceHeader";

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [latestRelease, setLatestRelease] = useState<Album>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLatestRelease = async () => {
    setLoading(true);
    const fetchSpotifyApiTokenResponse: SpotifyApiTokenResponse =
      await fetchSpotifyApiToken();
    const fetchArtistAlbumsResponse: ArtistAlbumsResponse =
      await fetchArtistAlbums(fetchSpotifyApiTokenResponse.access_token);

    setLatestRelease(fetchArtistAlbumsResponse.items[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchLatestRelease();
  }, []);

  return (
    <>
      <div className="flex flex-col mb-auto mt-4 w-full border-t-2 border-white">
        {!loading && latestRelease ? (
          <>
            <div className="flex justify-center w-full pt-8">
              <LatestRelease release={latestRelease} />
            </div>
          </>
        ) : null}
        {loading ? (
          <div className="flex mt-10 justify-center w-full">
            <CircularProgress color="inherit" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
