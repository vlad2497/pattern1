import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, DEFAULT_QUERY_PARAMS } from "../config";
import { Genre } from "./types";

export const genresApi = createApi({
  reducerPath: "genresApi",
  baseQuery,
  endpoints: (builder) => ({
    getGenresList: builder.query<Genre[], void>({
      query: () => ({
        url: `genre/movie/list`,
        params: DEFAULT_QUERY_PARAMS,
      }),
    }),
  }),
});

export const { useGetGenresListQuery } = genresApi;
