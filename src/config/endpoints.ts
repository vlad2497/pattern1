export default {
  movies: {
    popular: 'api/moviedb/movie/popular',
    getDetail: (id: number) => `api/moviedb/movie/${id}`,
    create: 'movie/create',
    getUpdate: (id: number) => `movie/update/${id}`,
  },
}
