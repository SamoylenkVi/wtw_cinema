import { default as dayjs } from 'dayjs';

export const FILM_CARD_COUNT = 8;
export const REGEX_ALT = /(?<=img\/).+(?=\.)/gm;
export const RATING_FILM = 10;
export const CURRENT_YEAR = dayjs().year() ;
export const DATA_FORMAT_TEXT = 'MMMM D, YYYY';
export const DATA_FORMAT_ATTRIBUTE = 'YYYY-MM-DD';
export const DEFAULT_FILM_DETAILS_INFORMATION = 'details';
export const DEFAULT_GENRE = 'All genres';

export const APP_ROUTE = {
  Root: '/',
  Login: '/login',
  MyList: '/my-list',
  Film: '/films/:id/:currentInformation',
  FilmDetails: '/films/:id/details',
  Review: '/films/:id/review',
  Player: '/player/:id',
  NotFound: '*'
} as const;

export const API_ROUTE = {
  Films: '/films',
  FavoriteFilm: '/favorite',
  PromoFilm: '/promo',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout',
} as const;

export const AUTHORIZATION_STATUS = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;


export const QUERY_PARAM = {
  GENRE: 'genre'
};

export const NAME_SPACE = {
  FavoriteFilmsData: 'FAVORITE_FILMS_DATA',
  FilmsData: 'FILMS_DATA',
  FilmData: 'FILM_DATA',
  Login: 'USER',
} as const;

type key = keyof typeof AUTHORIZATION_STATUS
export type AuthorizationStatusType = typeof AUTHORIZATION_STATUS[key];
