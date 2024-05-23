import { useEffect, useState } from "react";
import { RaceType } from "./types/RaceType";
import Timer from "./components/Timer";
import Cards from "./components/Cards";
import checkRace from "./hooks/checkRace";

const App = () => {
  const [races, setRaces] = useState<RaceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowTheRace, setNowTheRace] = useState<boolean>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/races");
        if (!response.ok) {
          throw new Error("Failed to fetch races");
        }
        const fetchedRaces: RaceType[] = await response.json();
        setRaces(fetchedRaces);
      } catch (error) {
        error instanceof Error && setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const check = setInterval(() => {
      const { start, end } = races[0];
      setNowTheRace(checkRace({ start, end }));
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(check);
  }, [races]);

  if (isLoading) {
    return (
      <main className="flex h-full w-full flex-col items-center justify-center bg-backgroundColor">
        Loading...
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex h-full w-full flex-col items-center justify-center bg-backgroundColor">
        <p>Error: {error}</p>
      </main>
    );
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
                unitOfMeasurement={"days"}
                color={"234, 53, 19"}
              />
              <Timer
                start={races[0].start}
                unitOfMeasurement={"hours"}
                color={"244, 200, 68"}
              />
              <Timer
                start={races[0].start}
                unitOfMeasurement={"minutes"}
                color={"238, 238, 238"}
              />
              <Timer
                start={races[0].start}
                unitOfMeasurement={"seconds"}
                color={"57, 97, 164"}
              />
            </div>
          </div>
        )}
        <div className="h-[2px] w-full bg-borderColor" />
        <Cards races={races} />
      </main>
    </>
  );
};

export default App;
