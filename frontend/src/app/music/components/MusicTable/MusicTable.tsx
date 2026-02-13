import React, { FunctionComponent } from "react";

import { Album } from "../../routes/routes.types";
import { MusicTableRow } from "./MusicTableRow";

export interface MusicTableProps {
  albums: Array<Album>;
}

export const MusicTable: FunctionComponent<MusicTableProps> = ({ albums }) => {
  return (
    <div className="flex flex-col justify-start w-full h-full mb-auto">
      <tr className="flex flex-row justify-start pl-6 pr-6 items-center h-16">
        <th className="w-12" />
        <th className="flex justify-start ml-8 w-1/4">Title</th>
        <th className="flex justify-start ml-8 w-1/6">Type</th>
        <th className="flex justify-start ml-8 w-1/6">Release Date</th>
      </tr>
      {albums.map((album, index) => (
        <MusicTableRow key={index} album={album} />
      ))}
    </div>
  );
};
