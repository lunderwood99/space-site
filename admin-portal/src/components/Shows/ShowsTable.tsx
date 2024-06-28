import React, { FunctionComponent } from "react";

import { ShowsTableRow } from "./ShowsTableRow";

export type Show = {
  location: string;
  date: number;
  link: string;
};

export interface ShowsProps {
  shows: Show[];
}

export const ShowsTable: FunctionComponent<ShowsProps> = ({ shows }) => {
  return (
    <div className="w-full max-h-96 overflow-y-scroll">
      <table className="flex flex-col justify-start w-full">
        <tr className="flex flex-row justify-start pl-6 pr-6 items-center h-20">
          <th className="flex justify-start w-1/4">Location</th>
          <th>Date</th>
          <th className="w-2/4">Link</th>
        </tr>
        {shows.map((show, index) => (
          <ShowsTableRow key={index} show={show} />
        ))}
      </table>
    </div>
  );
};
