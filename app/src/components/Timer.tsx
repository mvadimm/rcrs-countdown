import { useEffect, useState } from "react";
import { TimerProps } from "../type/TimerProps";

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="flex h-[270px] w-[270px] flex-col items-center justify-center">
        <svg className="countdown absolute h-[270px] w-[270px]">
          <circle
            className="countdown-circle svelte-iz8yn6"
            cx="50%"
            cy="50%"
            r="129px"
            stroke="rgb(234, 53, 19)"
            stroke-width="12"
            stroke-dasharray="810.5309046261666"
            stroke-dashoffset="476.3892711613229"
          ></circle>
          <circle
            className="fill-transparent opacity-20"
            cx="50%"
            cy="50%"
            r="129px"
            stroke="rgb(234, 53, 19)"
            stroke-width="12"
          ></circle>
        </svg>
        <span className="time svelte-iz8yn6">9</span>
        <span className="text svelte-iz8yn6">days</span>
      </div>
    </div>
  );
};

export default Timer;
