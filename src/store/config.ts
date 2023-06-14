import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_HOST } from '../config/api'

export type ApiError = {
  data: {
    message: string
  }
  status: number
}

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_HOST}/`,
  prepareHeaders: (headers) => {
    // headers.set('Test', '123')
    return headers
  },
})
