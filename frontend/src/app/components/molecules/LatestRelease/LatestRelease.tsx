import { FunctionComponent } from "react";

import { Album } from "@/app/music/routes/routes.types";

import Link from "next/link";

export interface LatestReleaseProps {
  release: Album;
}

export const LatestRelease: FunctionComponent<LatestReleaseProps> = ({
  release,
}) => {
  return (
    <div className="flex flex-col space-y-4 p-4 border rounded-lg border-solid w-fit">
      <div>
        <h2 className="font-bold text-xl">'{release.name}' OUT NOW</h2>
        <Link
          className="inline-block transition ease-in-out duration-500 text-amber-500 hover:text-amber-500 hover:-translate-y-1 hover:scale-110"
          href={release.external_urls.spotify}
        >
          Listen on Spotify
        </Link>
      </div>
      <img className="w-96 h-96" src={release.images[0].url} />
    </div>
  );
};
