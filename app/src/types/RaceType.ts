type Configuration = {
  [key: string]: string;
};

export type RaceType = {
  id: string;
  location: string;
  start: string;
  end: string;
  weekday: string[];
  configuration: Configuration;
};
