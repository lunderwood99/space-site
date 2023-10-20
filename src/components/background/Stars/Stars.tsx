'use client';

import { FunctionComponent } from "react";
import { Star } from "./Star";

export const Stars: FunctionComponent = () => {
  const stars = []
  for(let i = 0; i < 100; i++) {
    stars.push(<Star key={i}/>)
  }
  return (
    <div>
      {stars}
    </div>
  )
}