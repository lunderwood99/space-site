import { FunctionComponent } from "react";

import { Album } from "@/app/music/routes/routes.types";

export interface LatestReleaseProps {
  release: Album;
}

export const LatestRelease: FunctionComponent<LatestReleaseProps> = ({
  release,
}) => {
  return (
    <div className="p-4 border rounded-lg border-solid">
      <h2 className="font-bold text-lg">{release.name}</h2>
      Test
    </div>
  );
};
