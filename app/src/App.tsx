import { useEffect, useState } from "react";
import { RaceType } from "./types/RaceType";
import Timer from "./components/Timer";

const App = () => {
  const [races, setRaces] = useState<RaceType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/races");
        const fetchedRaces = await response.json();
        setRaces(fetchedRaces);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="flex h-full w-full flex-col items-center justify-center bg-backgroundColor">
        {races.length > 0 && (
          <h1 className="my-2.5 text-center text-5xl font-semibold">
            {races[0].location}
          </h1>
        )}
        <div className="my-7 flex flex-col flex-wrap items-center justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center gap-12">
            <Timer
              targetDate={races.length > 0 ? races[0].targetDate : ""}
              unitOfMeasurement={"days"}
              color={"234, 53, 19"}
            />
            <Timer
              targetDate={races.length > 0 ? races[0].targetDate : ""}
              unitOfMeasurement={"hours"}
              color={"244, 200, 68"}
            />

            <Timer
              targetDate={races.length > 0 ? races[0].targetDate : ""}
              unitOfMeasurement={"minutes"}
              color={"238, 238, 238"}
            />
            <Timer
              targetDate={races.length > 0 ? races[0].targetDate : ""}
              unitOfMeasurement={"seconds"}
              color={"57, 97, 164"}
            />
          </div>
        </div>
        <div className="w-full h-[2px] bg-borderColor"></div>
      </main>
    </>
  );
};

export default App;
