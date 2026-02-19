import React, { FunctionComponent } from "react";
import moment from "moment";
import AlbumIcon from "@mui/icons-material/Album";

import { Album } from "../../routes/routes.types";

export interface MusicTableRowProps {
  album: Album;
}

export const MusicTableRow: FunctionComponent<MusicTableRowProps> = ({
  album,
}) => {
  return (
    <div className="flex flex-row justify-start pl-4 pr-4 sm:pl-6 sm:pr-6 items-center min-h-16 md:min-h-20 py-3 md:py-0 md:h-20 border-y gap-2 sm:gap-0">
      <img
        className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-cover"
        src={album.images[0].url}
        alt=""
      />
      <p className="font-semibold ml-2 sm:ml-6 md:ml-8 min-w-0 flex-1 md:flex-none md:w-1/4 truncate">
        {album.name}
      </p>
      <p className="opacity-75 ml-8 min-w-0 w-1/6 truncate mobile:hidden">
        {album.album_type}
      </p>
      <p className="opacity-75 ml-8 min-w-0 w-1/6 shrink-0 mobile:hidden">
        {moment(album.release_date).format("MMM DD, YYYY")}
      </p>
      <a
        className="shrink-0 p-2 -m-2 md:ml-auto transition ease-in-out duration-500 hover:text-violet-500 hover:cursor-pointer touch-manipulation"
        target="_blank"
        rel="noopener noreferrer"
        href={album.external_urls.spotify}
        aria-label={`Open ${album.name} on Spotify`}
      >
        <AlbumIcon fontSize="small" className="md:text-inherit" />
      </a>
    </div>
  );
};
