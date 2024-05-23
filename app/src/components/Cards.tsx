import { RaceType } from "../types/RaceType";
import Card from "./Card";

type CardsProps = {
  races: RaceType[];
};

const Cards = ({ races }: CardsProps) => {
  return (
    <div className="my-6 flex min-w-[550px] flex-col gap-5">
      <h3 className="my-4 text-lg font-bold">Предстоящие гонки</h3>
      {races.map((race, id) => (
        <Card key={id} race={race} />
      ))}
    </div>
  );
};

export default Cards;
