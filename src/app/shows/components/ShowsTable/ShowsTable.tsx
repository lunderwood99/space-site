import React, { FunctionComponent } from "react";

import { Show } from "../../page";

import { ShowsTableRow } from './ShowsTableRow'

export interface ShowsTableProps {
  shows: Array<Show>
}

export const ShowsTable: FunctionComponent<ShowsTableProps> = ({ shows }) => {
  return(
    <>
    <table className="flex flex-col justify-start w-full h-full mb-auto mt-8">
      <tr className="flex flex-row justify-start pl-8 pr-8 items-center h-20 gap-4">
        <th>Location</th>
        <th>Date</th>
        <th></th>
      </tr>
      {shows.map((show, index) => <ShowsTableRow key={index} show={show}/>)}
    </table>
    </>
  )
}