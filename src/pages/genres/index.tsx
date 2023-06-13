import Header from "@/components/header";
import { useGetMoviesListQuery } from "@/store/movies/api";

const Genres = () => {
  const { data } = useGetMoviesListQuery();
  console.log(data);
  return (
    <>
      <Header />
      <div>genres page</div>
    </>
  );
};

export default Genres;
