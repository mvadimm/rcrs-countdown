import { useEffect, useState } from "react";
import { RaceType } from "./type/RaceType";
import Timer from "./components/Timer";

function App() {
  const [races, setRaces] = useState<RaceType[]>([]);

  async function fetchRaces(): Promise<RaceType[]> {
    try {
      const res = await fetch("http://localhost:3000/races");
      const races = await res.json();
      return races;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async function handleRaces() {
    try {
      const fetchedRaces = await fetchRaces();
      setRaces(fetchedRaces);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleRaces();
  }, []);

  return (
    <>
      <div className="bg-backgroundColor flex h-full w-full flex-col items-center justify-center">
        {races.length > 0 && (
          <h1 className="my-2.5 text-center text-5xl font-semibold">
            {races[0].location}
          </h1>
        )}
        <Timer targetDate={races.length > 0 ? races[0].targetDate : ""} />
      </div>
    </>
  );
}

export default App;
