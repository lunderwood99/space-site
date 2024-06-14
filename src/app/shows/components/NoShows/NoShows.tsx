import { FunctionComponent } from "react";

export interface NoShowsProps {
  showType: string
}

export const NoShows: FunctionComponent<NoShowsProps> = ({ showType}) => {
  return(
    <p className="flex flex-row justify-center w-full mt-8">
        NO {showType} SHOWS :\
    </p>
  )
}