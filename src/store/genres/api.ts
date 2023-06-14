import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../config'
import { Genre } from './types'

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery,
  endpoints: (builder) => ({
    getGenresList: builder.query<Genre[], void>({
      query: () => ({
        url: `genre/movie/list`,
      }),
    }),
  }),
})

export const { useGetGenresListQuery } = genresApi
