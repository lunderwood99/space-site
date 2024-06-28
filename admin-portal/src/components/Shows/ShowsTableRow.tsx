import React, { FunctionComponent } from "react";

export interface ShowsTableRowProps {
  show: any
}

export const ShowsTableRow: FunctionComponent<ShowsTableRowProps> = ({ show }) => {
  return(
    <tr className="flex flex-row justify-start pl-6 pr-6 items-center h-20 border-y">
      <p className="font-semibold w-1/4">{show.location}</p>
      <p className="font-semibold w-1/4">{show.date}</p>
      <p className="font-semibold w-1/4">{show.link}</p>
    </tr>
  )
}