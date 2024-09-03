"use client";

import { FunctionComponent, useEffect, useState } from "react";

import { fetchArtistAlbums, fetchSpotifyApiToken } from "./music/routes/routes";
import {
  Album,
  ArtistAlbumsResponse,
  SpotifyApiTokenResponse,
} from "./music/routes/routes.types";

import { LatestRelease } from "./components/molecules/LatestRelease/LatestRelease";
import { CircularProgress } from "@mui/material";

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
      <div className="flex justify-center mb-auto mt-8 pt-8 w-full border-t-2 border-white">
        {!loading && latestRelease ? (
          <LatestRelease release={latestRelease} />
        ) : null}
        {loading ? <CircularProgress color="inherit" /> : null}
      </div>
    </>
  );
};

export default Home;
