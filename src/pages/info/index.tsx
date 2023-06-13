import Header from "@/components/header";
// import { useAppSelector } from "@/store";
// import { selectMovies } from "@/store/movies/api";
// import { moviesApi } from "@/store/movies/api";

const Info = () => {
  // Вместо useQuery иногда можно использовать два хука ниже
  // каждый из них содержит частичный функционал из useQuery
  // что-то вроде для оптимизации, когда нам не нужно все
  // на самом деле используются редко

  // получаем данные из кеша уже выполненного запроса
  // если данных нет - запрос не вызывается!
  // данные сбрасываются автоматически, если время жизни кэша вышло (keepUnusedDataFor)
  // const useQueryStateResult = moviesApi.endpoints.getMoviesList.useQueryState();

  // получить повторно данные
  // если до этого запрос не выполнялся - выполнится
  // const { refetch } = moviesApi.endpoints.getMoviesList.useQuerySubscription();

  // console.log("useQueryState", useQueryStateResult);

  // Еще один способ получать данные через селектор, но пропадают аналогично useQueryState
  // при очистке кеша через время
  // const { data } = useAppSelector((state) => selectMovies(state));
  // console.log("data", data);
  return (
    <>
      <Header />
      <div>info page</div>
      {/* <div>{useQueryStateResult?.data?.results[0]?.title || "Нет данных"}</div> */}
      {/* <button
        onClick={() => {
          refetch();
        }}
      >
        Перезагрузить
      </button> */}
    </>
  );
};

export default Info;
