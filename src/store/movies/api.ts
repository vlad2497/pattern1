import { createApi } from "@reduxjs/toolkit/query/react";
import endpoints from "@/config/endpoints";
import { baseQuery, DEFAULT_QUERY_PARAMS } from "../config";
import { Movie, MovieCreateBody } from "./types";

// Обновить кэш определенного запроса в другом апи срезе
// reducerPath - moviesApi.reducerPath
// dispatch({
//   type: `${reducerPath}/invalidateTags`,
//   payload: ['SomeTag', 'AnotherTag'],
// });

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery,
  tagTypes: ["Movies"],
  // keepUnusedDataFor: 20,
  // refetchOnMountOrArgChange: true, // сбросить кэш при монтировании
  endpoints: (builder) => ({
    getMoviesList: builder.query<{ page: number; results: Movie[] }, void>({
      query: () => ({
        url: endpoints.movies.popular,
        params: DEFAULT_QUERY_PARAMS,
      }),
      keepUnusedDataFor: 5, // время жизни кэша
      providesTags: ["Movies"], // название кэша
    }),
    getMovieById: builder.query<Movie, number>({
      query: (id) => ({
        url: endpoints.movies.getDetail(id),
        params: DEFAULT_QUERY_PARAMS,
      }),
    }),
    saveMovie: builder.mutation<MovieCreateBody, Movie>({
      query: (body) => ({
        url: endpoints.movies.create,
        method: "POST",
        body,
      }),
      // invalidatesTags: ['Movies'] // сбросить кэш
    }),
    updateMovie: builder.mutation<Partial<MovieCreateBody>, Movie>({
      query: ({ id, ...patch }) => ({
        url: endpoints.movies.getDetail(id),
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

export const { useGetMoviesListQuery, useGetMovieByIdQuery } = moviesApi;

export const selectMovies = moviesApi.endpoints.getMoviesList.select();
