import React, { FunctionComponent } from "react";

import { Album } from "../../routes/routes.types";
import { MusicTableRow } from "./MusicTableRow";

export interface MusicTableProps {
  albums: Array<Album>;
}

export const MusicTable: FunctionComponent<MusicTableProps> = ({ albums }) => {
  return (
    <div className="flex flex-col justify-start w-full min-w-0 h-full mb-auto">
      <div
        className="flex flex-row justify-start pl-4 pr-4 sm:pl-6 sm:pr-6 items-center h-12 md:h-16 shrink-0"
        role="row"
        aria-hidden="true"
      >
        <div className="w-8 sm:w-10 md:w-12 shrink-0" aria-hidden="true" />
        <div className="flex justify-start ml-3 sm:ml-6 md:ml-8 min-w-0 flex-1 md:flex-none md:w-1/4">
          Title
        </div>
        <div className="flex justify-start ml-8 min-w-0 w-1/6 mobile:hidden">
          Type
        </div>
        <div className="flex justify-start ml-8 min-w-0 w-1/6 mobile:hidden">
          Release Date
        </div>
        <div className="w-8 sm:w-10 shrink-0 md:ml-auto" aria-hidden="true" />
      </div>
      {albums &&
        albums.map((album, index) => (
          <MusicTableRow key={index} album={album} />
        ))}
    </div>
  );
};
