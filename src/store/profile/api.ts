import { createApi } from '@reduxjs/toolkit/query/react'
import endpoints from '@/config/endpoints'
import { baseQuery } from '../config'
import { User } from './types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    saveUser: builder.mutation<Partial<User>, User>({
      query: ({ ...patch }) => ({
        url: endpoints.user.create,
        method: 'POST',
        body: patch,
      }),
    }),
  }),
})

export const { useSaveUserMutation } = userApi
