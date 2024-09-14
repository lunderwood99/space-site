"use client";

import { FunctionComponent, useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
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
  const [loading, setLoading] = useState(false);

  const fetchShows = async () => {
    setLoading(true);
    const upcomingShowsRes = await fetch("api/shows/upcomingShows");
    const upcomingShows: Show[] = await upcomingShowsRes.json();

    const pastShowsRes = await fetch("api/shows/pastShows");
    const pastShows: Show[] = await pastShowsRes.json();

    setUpcomingShows(upcomingShows);
    setPastShows(pastShows);
    setLoading(false);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="flex justify-center flex-col mb-auto mt-8 pt-8 w-full border-t-2 border-white">
      {!loading ? (
        <ShowsContent upcomingShows={upcomingShows} pastShows={pastShows} />
      ) : null}
      {loading ? <CircularProgress color="inherit" /> : null}
    </div>
  );
};

export default Shows;
