import { FunctionComponent, useState } from "react";

import { Show } from "../../page";

import { ShowsTable } from "../ShowsTable/ShowsTable";
import { NoShows } from "../NoShows/NoShows";

export interface ShowsContentProps {
  upcomingShows: Array<Show> | undefined;
  pastShows: Array<Show> | undefined;
}

export const ShowsContent: FunctionComponent<ShowsContentProps> = ({
  upcomingShows,
  pastShows,
}) => {
  const [upcomingShowsSelected, setUpcomingShowsSelected] = useState(true);
  const [pastShowsSelected, setPastShowsSelected] = useState(false);

  return (
    <>
      <ul className="flex flex-row gap-4 top-0 mr-12 justify-end">
        <li>
          <button
            className="inline-block transition ease-in-out duration-500 hover:text-violet-400 hover:-translate-y-1 hover:scale-110"
            onClick={() => {
              setUpcomingShowsSelected(true);
              setPastShowsSelected(false);
            }}
          >
            Upcoming
          </button>
        </li>
        <li>//</li>
        <li>
          <button
            className="inline-block transition ease-in-out duration-500 hover:text-violet-400 hover:-translate-y-1 hover:scale-110"
            onClick={() => {
              setPastShowsSelected(true);
              setUpcomingShowsSelected(false);
            }}
          >
            Past
          </button>
        </li>
      </ul>
      {upcomingShows && upcomingShows.length !== 0 && upcomingShowsSelected ? (
        <ShowsTable shows={upcomingShows} />
      ) : null}
      {(!upcomingShows || upcomingShows.length === 0) &&
      upcomingShowsSelected ? (
        <NoShows showType="UPCOMING" />
      ) : null}
      {pastShows && pastShows.length !== 0 && pastShowsSelected ? (
        <ShowsTable shows={pastShows} />
      ) : null}
      {(!pastShows || pastShows.length === 0) && pastShowsSelected ? (
        <NoShows showType="PAST" />
      ) : null}
    </>
  );
};
