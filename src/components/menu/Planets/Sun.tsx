'use client';
import { FunctionComponent } from "react";

interface SunProps {
}

export const Sun: FunctionComponent<SunProps> = () => {
  return (
    <div className="w-40 h-50 relative bg-orange-500 rounded-full">
      <div className="w-40 h-40 relative bg-yellow-500 rounded-full">
        <div className="w-10 h-10 left-6 top-10 relative bg-yellow-400 rounded-full"/>
        <div className="w-5 h-5 left-24 top-12 absolute bg-yellow-400 rounded-full"/>
        <div className="w-7 h-7 left-20 top-28 absolute bg-yellow-400 rounded-full"/>
      </div>
    </div>
  )
}