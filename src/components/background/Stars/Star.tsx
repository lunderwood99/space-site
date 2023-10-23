'use client';

import { FunctionComponent } from "react";
import useWindowDimensions from "../../hooks/useWindowDimension";

interface StarProps {
  key: number
}

export const Star: FunctionComponent<StarProps> = (key) => {
    const { width, height } = useWindowDimensions()
    const top = height ? height * Math.random(): 0
    const left = width ? width * Math.random(): 0
    const animationTime = Math.round(Math.random() * (12 - 5 + 1) + 5)

  return (
    <>
      {animationTime === 5 && 
        <div className={`animate-[twinkle_5s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 6 && 
        <div className={`animate-[twinkle_6s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 7 && 
        <div className={`animate-[twinkle_7s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 8 && 
        <div className={`animate-[twinkle_8s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 9 && 
        <div className={`animate-[twinkle_9s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 10 && 
        <div className={`animate-[twinkle_10s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 11 && 
        <div className={`animate-[twinkle_11s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
      {animationTime === 12 && 
        <div className={`animate-[twinkle_12s_ease-in-out_infinite] absolute w-0.5 h-0.5`} style={{top: top, left: left}} />
      }
    </>
  )
}
