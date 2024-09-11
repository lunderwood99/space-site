export const fetchArtistAlbums = async (accessToken: string) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${process.env.NEXT_PUBLIC_MOONSHAKE_ARTIST_ID}/albums`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken },
    }
  );
  return await response.json();
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
            process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
  });

  return await response.json();
};
