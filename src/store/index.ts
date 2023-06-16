import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { genresApi } from './genres/api'
import { moviesApi } from './movies/api'
import { userApi } from './profile/api'

export const store = configureStore({
  reducer: {
    [genresApi.reducerPath]: genresApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      genresApi.middleware,
      moviesApi.middleware,
      userApi.middleware
    ),
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
