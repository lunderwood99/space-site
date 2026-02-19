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
    <div className="flex flex-row gap-x-2 gap-y-2 pl-4 pr-4 default:pl-6 default:pr-6 items-center min-h-16 default:min-h-20 py-3 border-y">
      <p className="font-semibold min-w-0 flex-1 default:flex-none default:w-2/5 break-words">
        {show.venue}
      </p>
      <p className="font-semibold min-w-0 flex-1 default:flex-none default:w-1/5 break-words">
        {show.location}
      </p>
      <p className="opacity-75 min-w-0 mobile:w-1/5 default:w-1/5 shrink-0 break-words">
        {moment.unix(show.date).format("MMM DD, YYYY")}
      </p>
      <a
        href={show.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile:w-1/5 default:w-1/5 shrink-0 py-2 default:ml-auto transition ease-in-out duration-500 hover:text-violet-500 hover:-translate-y-1 hover:scale-110 touch-manipulation"
      >
        More Info
      </a>
    </div>
  );
};
