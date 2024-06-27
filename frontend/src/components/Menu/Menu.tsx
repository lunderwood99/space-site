import Link from "next/link";
import { FunctionComponent } from "react";

export interface MenuProps {}

export const Menu: FunctionComponent<MenuProps> = () => {
  return(
    <>
      <ul className="flex flex-row justify-between mt-8">
        <li>
          <Link className="inline-block transition ease-in-out duration-500 hover:text-indigo-500 hover:-translate-y-1 hover:scale-110" href="/">Home</Link>
        </li>
        <li>//</li>
        <li>
          <Link className="inline-block transition ease-in-out duration-500 hover:text-red-500 hover:-translate-y-1 hover:scale-110" href="/music">Music</Link>
        </li>
        <li>//</li>
        <li>
          <Link className="inline-block transition ease-in-out duration-500 hover:text-yellow-300 hover:-translate-y-1 hover:scale-110" href="/shows">Shows</Link>
        </li>
        <li>//</li>
        <li>
          <Link className="inline-block transition ease-in-out duration-500 hover:text-pink-500 hover:-translate-y-1 hover:scale-110" href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}