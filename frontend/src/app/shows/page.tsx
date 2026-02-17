"use client";

import { FunctionComponent, useEffect, useState } from "react";

import { ShowsContent } from "./components/ShowsContent/ShowsContent";

export interface ShowsProps {}

export type Show = {
  venue: string;
  location: string;
  date: number;
  link: string;
};

type ShowsApiResponse = {
  status: number;
  shows: Show[] | null;
};

const Shows: FunctionComponent<ShowsProps> = () => {
  const [upcomingShows, setUpcomingShows] = useState<Show[]>([]);
  const [pastShows, setPastShows] = useState<Show[]>([]);

  const fetchShows = async () => {
    const upcomingShowsRes = await fetch("api/shows/upcomingShows");
    const upcomingShowsData: ShowsApiResponse = await upcomingShowsRes.json();
    const upcomingShows: Show[] = upcomingShowsData.shows ?? [];

    const pastShowsRes = await fetch("api/shows/pastShows");
    const pastShowsData: ShowsApiResponse = await pastShowsRes.json();
    const pastShows: Show[] = pastShowsData.shows ?? [];

    setUpcomingShows(upcomingShows);
    setPastShows(pastShows);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="flex justify-center flex-col mb-auto mt-4 pt-4 w-full border-t-2 border-white">
      <ShowsContent upcomingShows={upcomingShows} pastShows={pastShows} />
    </div>
  );
};

export default Shows;
