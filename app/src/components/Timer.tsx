import { useEffect, useState } from "react";
import { TimerProps } from "../types/TimerProps";
import { TimerType } from "../types/TimerType";

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  function calculateTime(): TimerType {
    const difference = +new Date(targetDate) - +new Date();
    let time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return time;
  }
  const [timeLeft, setTimeLeft] = useState(calculateTime());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  });


  return (
    <div>
      <div className="relative flex h-[270px] w-[270px] flex-col items-center justify-center">
        <svg className="countdown absolute h-[270px] w-[270px]">
          <circle
            className="countdown fill-transparent"
            cx="50%"
            cy="50%"
            r="129px"
            stroke="rgb(57, 97, 164)"
            stroke-width="12"
            stroke-dasharray="810.5309046261666"
            stroke-dashoffset={здесь}
          ></circle>
          <circle
            className="fill-transparent opacity-20"
            cx="50%"
            cy="50%"
            r="129px"
            stroke="rgb(57, 97, 164)"
            stroke-width="12"
          ></circle>
        </svg>
        <span className="text-6xl font-bold ">{timeLeft.seconds}</span>
        <span className="  text-2xl text-secondaryTextColor">seconds</span>
      </div>
    </div>
  );
};

export default Timer;
