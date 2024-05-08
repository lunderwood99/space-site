import React, { FunctionComponent } from "react";

import { Album } from "../../routes/routes.types";
import { MusicTableRow } from "./MusicTableRow";

export interface MusicTableProps {
  albums: Array<Album>
}

export const MusicTable: FunctionComponent<MusicTableProps> = ({ albums }) => {
  return(
    <div className="w-full">
      {albums.map((album, index) => <MusicTableRow key={index} album={album}/>)}
    </div>
  )
}