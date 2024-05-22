import { useEffect, useState } from "react";

type TimerProps = {
  start: string;
  unitOfMeasurement: string;
  color: string;
  end: string;
};

const Timer = ({ start, unitOfMeasurement, color, end }: TimerProps) => {
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
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="relative flex h-[270px] w-[270px] flex-col items-center justify-center gap-4">
      <svg className="absolute h-[270px] w-[270px]">
        <circle
          className="countdown fill-transparent"
          cx="50%"
          cy="50%"
          r="129px"
          stroke={`rgb(${color})`}
          strokeWidth={12}
          strokeDasharray={2 * Math.PI * 129}
          strokeDashoffset={timeLeft.line}
        ></circle>
        <circle
          className="fill-transparent opacity-20"
          cx="50%"
          cy="50%"
          r="129px"
          stroke={`rgb(${color})`}
          strokeWidth={12}
        ></circle>
      </svg>
      <span className="text-6xl font-bold">{timeLeft.time}</span>
      <span className="text-2xl text-secondaryTextColor">
        {unitOfMeasurement}
      </span>
    </div>
  );

  
};

export default Timer;

