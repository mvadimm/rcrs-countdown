import { useEffect, useState } from "react";

type TimerProps = {
  start: string;
  unitOfMeasurement: string;
  color: string;
};

const Timer = ({ start, unitOfMeasurement, color }: TimerProps) => {
  const calculateTime = () => {
    const difference = +new Date(start) - +new Date();
    const time = { time: 0, line: 0 };
    if (difference > 0) {
      switch (unitOfMeasurement) {
        case "seconds":
          time.time = Math.floor((difference / 1000) % 60);
          time.line = ((2 * Math.PI * 129) / 60) * (60 - time.time);
          break;
        case "minutes":
          time.time = Math.floor((difference / 60000) % 60);
          time.line =
            ((2 * Math.PI * 129) / 3600) *
            (3600 - Math.floor((difference / 1000) % 3600));
          break;
        case "hours":
          time.time = Math.floor((difference / (1000 * 60 * 60)) % 24);
          time.line =
            ((2 * Math.PI * 129) / 86400) *
            (86400 - Math.floor((difference / 1000) % 86400));
          break;
        case "days":
          time.time = Math.floor(difference / (1000 * 60 * 60 * 24));
          time.line =
            ((2 * Math.PI * 129) / 2592000) *
            (2592000 - Math.floor((difference / 1000) % 2592000));
          break;
      }
    }
    return time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  });

  const r = isSmallScreen ? 64.5 : 129;
  const strokeWidth = isSmallScreen ? 6 : 12;
  const strokeDasharray = 2 * Math.PI * r;
  const strokeDashoffset = isSmallScreen ? timeLeft.line / 2 : timeLeft.line;

  return (
    <div className="relative flex h-[135px] w-[135px] flex-col items-center justify-center md:h-[270px] md:w-[270px]">
      <svg className="absolute h-[135px] w-[135px] md:h-[270px] md:w-[270px]">
        <circle
          className="countdown fill-transparent"
          cx="50%"
          cy="50%"
          r={`${r}px`}
          stroke={`rgb(${color})`}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        ></circle>
        <circle
          className="fill-transparent opacity-20"
          cx="50%"
          cy="50%"
          r={`${r}px`}
          stroke={`rgb(${color})`}
          strokeWidth={strokeWidth}
        ></circle>
      </svg>
      <span className="md:py-3 text-[36px]  font-bold md:text-6xl">
        {timeLeft.time}
      </span>
      <span className="text-[16px] md:py-3 text-secondaryTextColor md:text-2xl">
        {unitOfMeasurement}
      </span>
    </div>
  );
};

export default Timer;
