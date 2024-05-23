import { useState } from "react";
import { RaceType } from "../types/RaceType";

import ChevronUp from "../assets/chevron-up.svg";

type CardProps = {
  race: RaceType;
};

const Card = ({ race }: CardProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClick = (): void => {
    return setOpenMenu(!openMenu);
  };

  return (
    <div key={race.id} className="flex flex-col gap-[5px]">
      <div className="g-[15px] flex flex-col rounded-xl bg-mainTableColor px-[25px] py-[12px]">
        <div className="flex flex-row items-center justify-between border-b-2 border-secondaryTableColor pb-3 font-semibold">
          <span className="font-semibold">{race.location}</span>
          <button
            className="button rounded-[50%] border-none bg-buttonColor px-[10px] py-[5px] text-base font-bold text-secondaryTextColor hover:bg-buttonHoverColor hover:text-mainTextColor"
            onClick={() => handleClick()}
          >
            {!openMenu ? (
              <img src={ChevronUp} className="h-4 w-4" />
            ) : (
              <img src={ChevronUp} className="i-closed h-4 w-4" />
            )}
          </button>
        </div>
        <div className="flex flex-row items-center justify-between"></div>
      </div>
    </div>
  );
};

export default Card;
