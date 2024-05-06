import { FunctionComponent } from "react";

import { MusicEntry, MusicFormat } from "./components/MusicEntry/MusicEntry";

export interface MusicProps {}

const Music: FunctionComponent<MusicProps> = () => {
  return(
    <>
      <MusicEntry title='Slipperscree' musicFormat={MusicFormat.SINGLE}/>
    </>
  )
}

export default Music