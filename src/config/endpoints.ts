export default {
  movies: {
    popular: 'movie/popular',
    getDetail: (id: number) => `movie/${id}`,
    create: 'movie/create',
    getUpdate: (id: number) => `movie/update/${id}`,
  },
}
