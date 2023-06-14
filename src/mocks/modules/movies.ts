import { rest } from 'msw'
import { BASE_HOST } from '@/config/api'
import endpoints from '@/config/endpoints'

export enum ResponseType {
  Success,
  Empty,
  Error,
}

type ResponseStatus = number

type Response = {
  type: ResponseType
  status: ResponseStatus
}

export const getPopular = (response: Response) =>
  rest.get(`${BASE_HOST}/${endpoints.movies.popular}`, (req, res, ctx) => {
    let json = null
    if (response.type === ResponseType.Empty)
      json = {
        page: 1,
        results: [],
      }
    if (response.type === ResponseType.Success)
      json = {
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: '/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg',
            genre_ids: [16, 878, 28],
            id: 610150,
            original_language: 'ja',
            original_title: 'ドラゴンボール超 スーパーヒーロー',
            overview:
              'Сорок один год назад на планете Вегета, родине печально известной расы сайянских воинов, король Вегета заметил ребенка по имени Броли, чья скрытая сила превосходила силу его собственного сына. Полагая, что сила Броли однажды превзойдет силу его ребенка, Вегеты, король отправляет Броли на пустынную планету Вампа. Спустя годы на Земле Гокуу Сон и принц Вегета - считающиеся последними выжившими представителями расы Сайян - заняты тренировками на отдаленном острове. Но их спарринг прерывается, когда появление их старого врага Фризы заставляет их искать последний из исполняющих желания Шаров Дракона на замерзшем континенте. Оказавшись там, Фриза демонстрирует своих новых союзников: Парагуса и теперь чрезвычайно могущественного Броли. Легендарная битва, сотрясающая основы мира, начинается, когда Гокуу и Вегета сталкиваются с Броли, бесподобным воином, ярость которого только и ждет, чтобы его развязать.',
            popularity: 10211.621,
            poster_path: '/uohymzBVaIYjbnoQstbnlia6ZPJ.jpg',
            release_date: '2022-06-11',
            title: 'Драконий жемчуг: Супер — супергерой',
            video: false,
            vote_average: 7.7,
            vote_count: 701,
          },
          {
            adult: false,
            backdrop_path: '/vvObT0eIWGlArLQx3K5wZ0uT812.jpg',
            genre_ids: [28, 12, 14],
            id: 616037,
            original_language: 'en',
            original_title: 'Thor: Love and Thunder',
            overview:
              'Тор  отправляется в путешествие, не похожее ни на что из того, с чем он когда-либо сталкивался, — в поисках внутреннего спокойствия. Но его выход на пенсию прерывается Горром Убийцей богов, который стремится уничтожить богов. Чтобы справиться с угрозой, Тор обращается за помощью к Валькирии, Коргу и бывшей подруге Джейн Фостер, которая, к удивлению Тора, необъяснимым образом владеет своим волшебным молотом Мьёльниром. Вместе они отправляются в душераздирающее космическое приключение, чтобы раскрыть тайну Горра и остановить его, пока не стало слишком поздно.',
            popularity: 4883.963,
            poster_path: '/80ekusNlTdZO5hb9fKsFSCA7k4X.jpg',
            release_date: '2022-07-06',
            title: 'Тор: Любовь и гром',
            video: false,
            vote_average: 6.8,
            vote_count: 2190,
          },
        ],
      }
    if (response.type === ResponseType.Error) json = null

    return res(ctx.status(response.status), ctx.json(json))
  })

export const getDetail = (response: Response, id = 1) =>
  rest.get(
    `${BASE_HOST}/${endpoints.movies.getDetail(id)}`,
    (req, res, ctx) => {
      let json = null
      if (response.type === ResponseType.Empty) json = {}
      if (response.type === ResponseType.Success)
        json = {
          adult: false,
          backdrop_path: '/vvObT0eIWGlArLQx3K5wZ0uT812.jpg',
          genre_ids: [28, 12, 14],
          id,
          original_language: 'en',
          original_title: 'Thor: Love and Thunder',
          overview:
            'Тор  отправляется в путешествие, не похожее ни на что из того, с чем он когда-либо сталкивался, — в поисках внутреннего спокойствия. Но его выход на пенсию прерывается Горром Убийцей богов, который стремится уничтожить богов. Чтобы справиться с угрозой, Тор обращается за помощью к Валькирии, Коргу и бывшей подруге Джейн Фостер, которая, к удивлению Тора, необъяснимым образом владеет своим волшебным молотом Мьёльниром. Вместе они отправляются в душераздирающее космическое приключение, чтобы раскрыть тайну Горра и остановить его, пока не стало слишком поздно.',
          popularity: 4883.963,
          poster_path: '/80ekusNlTdZO5hb9fKsFSCA7k4X.jpg',
          release_date: '2022-07-06',
          title: 'Тор: Любовь и гром',
          video: false,
          vote_average: 6.8,
          vote_count: 2190,
        }
      if (response.type === ResponseType.Error) json = null

      return res(ctx.status(response.status), ctx.json(json))
    }
  )

export default [
  getPopular({
    type: ResponseType.Success,
    status: 200,
  }),
  getDetail({
    type: ResponseType.Success,
    status: 200,
  }),
]
