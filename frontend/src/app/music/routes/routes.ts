import moment from "moment";

import type { Album, ArtistAlbumsResponse } from "./routes.types";

function albumReleaseSortKey(album: Album): number {
  const format =
    album.release_date_precision === "year"
      ? "YYYY"
      : album.release_date_precision === "month"
        ? "YYYY-MM"
        : "YYYY-MM-DD";
  return moment.utc(album.release_date, format, true).valueOf();
}

export const fetchArtistAlbums = async (accessToken: string) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${process.env.NEXT_PUBLIC_MOONSHAKE_ARTIST_ID}/albums`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken },
      cache: "no-store",
    },
  );
  const data: ArtistAlbumsResponse = await response.json();
  const sortedItems =
    data.items.sort(
      (a, b) => albumReleaseSortKey(b) - albumReleaseSortKey(a),
    ) || [];
  return {
    ...data,
    items: sortedItems,
  };
};

export const fetchSpotifyApiToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
            ":" +
            process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
        ).toString("base64"),
    },
    cache: "no-store",
  });

  return await response.json();
};
