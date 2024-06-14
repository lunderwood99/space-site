"use client"
import { FunctionComponent } from "react";

import { ShowsContent } from "./components/ShowsContent/ShowsContent";

export interface ShowsProps {}

export type Show = {
  location: string
  date: number
  link: string
}

const upcomingShows = [
  {
    location: 'HQ',
    date: 1718401888,
    link: 'https://hqdenver.com/'
  }
]

const pastShows = [
  {
    location: 'Super Long Bar Name',
    date: 1749955888,
    link: 'https://bar.com/'
  },
  {
    location: 'Sadison Bear Harvin',
    date: 1749955888,
    link: 'https://sbh.com/'
  }
]

const Shows: FunctionComponent<ShowsProps> = () => {
  return(
    <div className="flex flex-col mb-auto mt-8 pt-8 w-full border-t-2 border-white">
      <ShowsContent upcomingShows={[]} pastShows={pastShows}/>
    </div>
  )
}

export default Shows