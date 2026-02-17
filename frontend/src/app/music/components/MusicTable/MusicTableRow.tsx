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
    <div className="flex flex-row justify-start pl-6 pr-6 items-center h-20 border-y">
      <img className="rounded-full w-12 h-12" src={album.images[0].url} />
      <p className="font-semibold ml-8 w-1/4">{album.name}</p>
      <p className="opacity-75 ml-8 w-1/6">{album.album_type}</p>
      <p className="opacity-75 ml-8 w-1/6">
        {moment(album.release_date).format("MMM DD, YYYY")}
      </p>
      <a className="ml-auto" href={album.external_urls.spotify}>
        <AlbumIcon className="transition ease-in-out duration-500 hover:text-violet-500 hover:cursor-pointer" />
      </a>
    </div>
  );
};
