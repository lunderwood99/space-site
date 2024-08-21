import React, { FunctionComponent } from "react";
import moment from "moment";

export interface ShowsTableRowProps {
  show: any;
}

export const ShowsTableRow: FunctionComponent<ShowsTableRowProps> = ({
  show,
}) => {
  return (
    <tr className="flex flex-row justify-start pl-6 pr-6 items-center h-20 border-y">
      <td className="font-semibold w-1/4">{show.location}</td>
      <td className="font-semibold w-1/4">
        {moment(show.date).format("MM/DD/YYYY")}
      </td>
      <td className="font-semibold w-1/4">{show.link}</td>
    </tr>
  );
};
