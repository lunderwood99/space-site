import { FunctionComponent } from "react";

export enum MusicFormat {
  ALBUM = 'ALBUM',
  EP = 'EP',
  SINGLE = 'SINGLE'
}

export interface MusicEntryProps {
  title: string,
  musicFormat: MusicFormat
}

export const MusicEntry: FunctionComponent<MusicEntryProps> = ({ title, musicFormat}) => {
  return(
    <div className="flex flex-row">
      <p className="font-semibold m-4">{title}</p>
      <p className="opacity-75 m-4">{musicFormat}</p>
    </div>
  )
}