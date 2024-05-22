import { useEffect, useState } from "react";
import { RaceType } from "./types/RaceType";
import Timer from "./components/Timer";
import EventList from "./components/EventList";
import checkRace from "./hooks/checkRace";

const App = () => {
  const [races, setRaces] = useState<RaceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/races");
        const fetchedRaces = await response.json();
        setRaces(fetchedRaces);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [nowTheRace, setNowTheRace] = useState<boolean>();

  useEffect(() => {
    const check = setInterval(() => {
      const start = races[0].start;
      const end = races[0].end;
      checkRace({ start, end }) ? setNowTheRace(true) : setNowTheRace(false);
    }, 1000);
    return () => clearInterval(check);
  }, [races]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="flex h-full w-full flex-col items-center justify-center bg-backgroundColor">
        <h1 className="my-2.5 text-center text-5xl font-semibold">
          {races[0].location}
        </h1>

        {nowTheRace ? (
          <div className=" mx-auto mb-3 text-8xl font-bold text-secondaryTextColor">
            Гонка уже идёт!
          </div>
        ) : (
          <div className="my-7 flex flex-col flex-wrap items-center justify-center">
            <div className="flex flex-row flex-wrap items-center justify-center gap-12">
              <Timer
                start={races[0].start}
                end={races[0].end}
                unitOfMeasurement={"days"}
                color={"234, 53, 19"}
              />
              <Timer
                start={races[0].start}
                end={races[0].end}
                unitOfMeasurement={"hours"}
                color={"244, 200, 68"}
              />

              <Timer
                start={races[0].start}
                end={races[0].end}
                unitOfMeasurement={"minutes"}
                color={"238, 238, 238"}
              />
              <Timer
                start={races[0].start}
                end={races[0].end}
                unitOfMeasurement={"seconds"}
                color={"57, 97, 164"}
              />
            </div>
          </div>
        )}
        <div className="h-[2px] w-full bg-borderColor" />
        <EventList races={races} />
      </main>
    </>
  );
};

export default App;
