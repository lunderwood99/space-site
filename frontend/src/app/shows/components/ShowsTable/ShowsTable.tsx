import React, { FunctionComponent } from "react";

import { Show } from "../../page";

import { ShowsTableRow } from "./ShowsTableRow";

export interface ShowsTableProps {
  shows: Array<Show>;
}

export const ShowsTable: FunctionComponent<ShowsTableProps> = ({ shows }) => {
  return (
    <div className="flex flex-col justify-start w-full min-w-0 h-full mb-auto">
      <div
        className="flex flex-row flex-wrap gap-x-2 gap-y-1 pl-4 pr-4 default:pl-6 default:pr-6 items-center min-h-14 default:min-h-20 py-3 shrink-0"
        role="row"
        aria-hidden="true"
      >
        <div className="min-w-0 flex-1 default:flex-none default:w-2/5 break-words">
          Venue
        </div>
        <div className="min-w-0 flex-1 default:flex-none default:w-1/5 break-words">
          Location
        </div>
        <div className="min-w-0 shrink-0 break-words">Date</div>
        <div className="w-20 shrink-0 default:ml-auto" aria-hidden="true" />
      </div>
      {shows &&
        shows.map((show, index) => <ShowsTableRow key={index} show={show} />)}
    </div>
  );
};
