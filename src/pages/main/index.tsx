import CustomForm from '@/components/form'
import Header from '@/components/header'
import { useGetMoviesListQuery } from '@/store/movies/api'

const Main = () => {
  const { data, isLoading } = useGetMoviesListQuery()
  if (isLoading) return <div role="loader">Загрузка...</div>
  return (
    <>
      <Header />
      <CustomForm />
      <div>main page</div>
      {data?.results?.map((movie) => (
        <div role="movie-card" key={movie?.title || ''}>
          <div>{movie?.title || ''}</div>
        </div>
      ))}
    </>
  )
}

export default Main
