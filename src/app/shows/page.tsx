import { FunctionComponent } from "react";

export interface ShowsProps {}

const Shows: FunctionComponent<ShowsProps> = () => {
  return(
  <div className="flex flex-col">
    <ul className="flex flex-row justify-start mt-8 top-0">
      <li>
        <button className="inline-block transition ease-in-out duration-500 hover:text-green-500 hover:-translate-y-1 hover:scale-110">Upcoming</button>
      </li>
      <li>
        <button className="inline-block transition ease-in-out duration-500 hover:text-indigo-500 hover:-translate-y-1 hover:scale-110">Past</button>
      </li>
    </ul>
  </div>
  )
}

export default Shows