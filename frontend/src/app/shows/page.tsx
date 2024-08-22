"use client";
import { FunctionComponent, useEffect, useState } from "react";
import moment from "moment";

import { ShowsContent } from "./components/ShowsContent/ShowsContent";

export interface ShowsProps {}

export type Show = {
  location: string;
  date: number;
  link: string;
};

const Shows: FunctionComponent<ShowsProps> = () => {
  const [upcomingShows, setUpcomingShows] = useState<Show[]>([]);
  const [pastShows, setPastShows] = useState<Show[]>([]);

  const fetchShows = async () => {
    const res = await fetch("api/shows");
    const shows: Show[] = await res.json();

    const currDate = moment().unix();

    let retrievedPastShows: Show[] = [];
    let retrievedUpcomingShows: Show[] = [];

    shows.forEach((show) => {
      if (show.date < currDate) retrievedPastShows.push(show);
      else retrievedUpcomingShows.push(show);
    });
    retrievedPastShows.sort((a, b) => {
      return b.date - a.date;
    });
    retrievedUpcomingShows.sort((a, b) => {
      return a.date - b.date;
    });
    setPastShows(retrievedPastShows);
    setUpcomingShows(retrievedUpcomingShows);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="flex flex-col mb-auto mt-8 pt-8 w-full border-t-2 border-white">
      <ShowsContent upcomingShows={upcomingShows} pastShows={pastShows} />
    </div>
  );
};

export default Shows;
