import { setupServer } from 'msw/node'
import movies from './modules/movies'

// Используется для мокков автотестов
export const server = setupServer(...movies)
