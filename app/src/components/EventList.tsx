import { RaceType } from "../types/RaceType";

type EventList = {
  races: RaceType[];
};
const EventList = ({ races }: EventList) => {
  console.log(races);
  return (
    <div className="my-6 flex min-w-[550px] flex-col gap-5">
      <h3 className="my-4 text-lg font-bold">Предстоящие гонки</h3>
      <div>{races[0].start}</div>
    </div>
  );
};
export default EventList;
