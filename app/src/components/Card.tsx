import { useState } from "react";
import { RaceType } from "../types/RaceType";

import ChevronUp from "../assets/chevron-up.svg";
import ChevronDown from "../assets/chevron-down.svg";
import HiddenCard from "./HiddenCard";

type CardProps = {
  race: RaceType;
};

const Card = ({ race }: CardProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const dateStart = new Date(race.start);
  const dateEnd = new Date(race.end);
  const monthNameStart = dateStart.toLocaleString("ru-RU", { month: "short" });
  const monthNameEnd = dateEnd.toLocaleString("ru-RU", { month: "short" });
  const monthStart = `${monthNameStart.charAt(0).toUpperCase()}${monthNameStart.slice(1)}`;
  const monthEnd = `${monthNameEnd.charAt(0).toUpperCase()}${monthNameEnd.slice(1)}`;

  const handleClick = (): void => {
    return setOpenMenu(!openMenu);
  };

  return (
    <div
      key={race.id}
      className="flex flex-col gap-[5px] text-[14px] md:text-base"
    >
      <div className="flex flex-col gap-[15px] rounded-xl bg-mainTableColor px-[25px] py-[12px]">
        <div className="flex flex-row items-center justify-between border-b-2 border-secondaryTableColor pb-3 font-semibold">
          <span className="font-semibold">{race.location}</span>
          <button
            className="button h-9 w-9 rounded-[50%] border-none bg-buttonColor  px-[10px] py-[5px] text-base font-bold hover:bg-buttonHoverColor "
            onClick={() => handleClick()}
          >
            <img
              src={openMenu ? ChevronDown : ChevronUp}
              className="h-4 w-4 transition-transform duration-200"
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <span className=" font-medium">
              1. {race.weekday && race.weekday[0]}, {monthStart}{" "}
              {dateStart.getDate()}
            </span>
            <span className="font-medium">
              2. {race.weekday && race.weekday[1]}, {monthEnd}{" "}
              {dateEnd.getDate()}
            </span>
          </div>
        </div>
      </div>
      {openMenu && race.configuration && (
        <HiddenCard configuration={race.configuration} />
      )}
    </div>
  );
};

export default Card;
