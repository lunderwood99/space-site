import React, { FunctionComponent } from "react";

import { Show } from "../../page";

import { ShowsTableRow } from "./ShowsTableRow";

export interface ShowsTableProps {
  shows: Array<Show>;
}

export const ShowsTable: FunctionComponent<ShowsTableProps> = ({ shows }) => {
  return (
    <>
      <table className="flex flex-col justify-start w-full h-full mb-auto">
        <tr className="flex flex-row justify-start pl-6 pr-6 items-center h-20">
          <th className="flex justify-start w-1/4">Venue</th>
          <th>Date</th>
        </tr>
        {shows.map((show, index) => (
          <ShowsTableRow key={index} show={show} />
        ))}
      </table>
    </>
  );
};
