import React, { FunctionComponent } from "react";
import moment from "moment";

import { Album } from "../../routes/routes.types";

export interface MusicTableRowProps {
  album: Album
}

export const MusicTableRow: FunctionComponent<MusicTableRowProps> = ({ album }) => {
  return(
    <div className="flex flex-row justify-start items-center h-20 border-y">
      <div className="w-12 h-12">
        <img className="rounded-full" src={album.images[0].url}/>
      </div>
      <p className="font-semibold m-4">{album.name}</p>
      <p className="opacity-75 m-4">{album.album_type}</p>
      <p className="opacity-75 m-4">{moment(album.release_date).format('MMM DD, YYYY')}</p>
    </div>
  )
}