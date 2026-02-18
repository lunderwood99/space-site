import React, { FunctionComponent } from "react";
import moment from "moment";

import { Show } from "../../page";

export interface ShowsTableRowProps {
  show: Show;
}

export const ShowsTableRow: FunctionComponent<ShowsTableRowProps> = ({
  show,
}) => {
  return (
    <tr className="flex flex-row justify-start pl-6 pr-6 items-center h-20 border-y">
      <p className="font-semibold w-1/4">{show.venue}</p>
      <p className="font-semibold w-1/4 shrink-0 truncate">{show.location}</p>
      <p className="opacity-75">
        {moment.unix(show.date).format("MMM DD, YYYY")}
      </p>
      <a
        href={show.link}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto transition ease-in-out duration-500 hover:text-violet-500 hover:-translate-y-1 hover:scale-110"
      >
        More Info
      </a>
    </tr>
  );
};
