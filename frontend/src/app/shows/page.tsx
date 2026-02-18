"use client";

import { FunctionComponent, useEffect, useState } from "react";

import { ShowsContent } from "./components/ShowsContent/ShowsContent";
import { CircularProgress } from "@mui/material";

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
  const [loading, setLoading] = useState<boolean>(false);

  const fetchShows = async () => {
    setLoading(true);
    const upcomingShowsRes = await fetch("api/shows/upcomingShows");
    const upcomingShowsData: ShowsApiResponse = await upcomingShowsRes.json();
    const upcomingShows: Show[] = upcomingShowsData.shows ?? [];

    const pastShowsRes = await fetch("api/shows/pastShows");
    const pastShowsData: ShowsApiResponse = await pastShowsRes.json();
    const pastShows: Show[] = pastShowsData.shows ?? [];

    setUpcomingShows(upcomingShows);
    setPastShows(pastShows);
    setLoading(false);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="flex justify-center flex-col mb-auto mt-4 pt-4 w-full border-t-2 border-white">
      {!loading && (
        <ShowsContent upcomingShows={upcomingShows} pastShows={pastShows} />
      )}
      {loading && (
        <div className="flex mt-10 justify-center w-full">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
};

export default Shows;
