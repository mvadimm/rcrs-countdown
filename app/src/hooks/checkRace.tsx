type checkRaceProps = {
  start: string;
  end: string;
};

const checkRace = ({ start, end }: checkRaceProps): boolean => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const now = new Date();

  const isNowInInterval = now >= startDate && now <= endDate;

  return isNowInInterval;
};

export default checkRace;
