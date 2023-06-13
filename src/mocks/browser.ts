import { setupWorker } from 'msw'
import movies from './modules/movies'

// Используется для мокков при разработке
export const worker = setupWorker(...movies)
