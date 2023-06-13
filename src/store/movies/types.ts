export type Movie = {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
};

export type MovieCreateBody = {
  id: number;
  title: string;
};
