export const fetchArtistAlbums = async (accessToken: string) => {
    const response = await fetch("https://api.spotify.com/v1/artists/4sS2lHJln9gnoUJKsQe8PY/albums", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    return await response.json();
}

export const fetchSpotifyApiToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
    },
  })

  return await response.json()
}