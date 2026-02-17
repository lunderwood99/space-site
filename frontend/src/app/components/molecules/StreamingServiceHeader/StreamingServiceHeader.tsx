import Link from "next/link";
import { FunctionComponent } from "react";

export interface StreamingServiceHeaderProps {
  bandcampUrl?: string;
  spotifyUrl?: string;
  tidalUrl?: string;
}

export const StreamingServiceHeader: FunctionComponent<
  StreamingServiceHeaderProps
> = ({ bandcampUrl, spotifyUrl, tidalUrl }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-4">
      {bandcampUrl && (
        <Link
          className="inline-block transition ease-in-out duration-500 text-blue-500 hover:-translate-y-1 hover:scale-110"
          href={bandcampUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bandcamp
        </Link>
      )}
      {bandcampUrl && (spotifyUrl || tidalUrl) && <span>//</span>}
      {spotifyUrl && (
        <Link
          className="inline-block transition ease-in-out duration-500 text-green-500 hover:-translate-y-1 hover:scale-110"
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </Link>
      )}
      {spotifyUrl && tidalUrl && <span>//</span>}
      {tidalUrl && (
        <Link
          className="inline-block transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110"
          href={tidalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tidal
        </Link>
      )}
    </div>
  );
};
