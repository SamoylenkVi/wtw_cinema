export const FILM_CARD_COUNT = 8;
export const REGEX_ALT = /(?<=img\/).+(?=\.)/gm;
export const RATING_FILM = 10;

export const APP_ROUTE = {
  Root: '/',
  Login: '/login',
  Film: '/films/:id',
  Review: '/films/:id/review',
  Player: '/player/:id',
  NotFound: '*'
} as const;

export const AUTHORIZATION_STATUS = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;
