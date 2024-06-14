import React, { FunctionComponent } from "react";
import moment from "moment";

import { Show } from "../../page";

export interface ShowsTableRowProps {
  show: Show
}

export const ShowsTableRow: FunctionComponent<ShowsTableRowProps> = ({ show }) => {
  return(
    <tr className="flex flex-row justify-start pl-2 pr-2 items-center h-20 border-y">
      <p className="font-semibold m-4">{show.location}</p>
      <p className="opacity-75 m-4">{moment(show.date).format('MMM DD, YYYY')}</p>
      <p className="opacity-75 m-4 ml-auto">{show.link}</p>
    </tr>
  )
}