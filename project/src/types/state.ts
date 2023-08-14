import { store } from '../store/store';
import { Film } from './film';
import { Comment } from './comment';
import { AuthorizationStatusType } from '../constants';

export type FilmsData = {
  films: Film[];
  isFilmsDataLoading: boolean;
  genres: string[];
  hasError: boolean;
};

export type FavoriteFilmsData = {
  favoriteFilms: Film[];
}

export type FilmData = {
  filmDetail: Film | null;
  promoFilm: Film | null;
  filmComments: Comment[];
  similarFilmDetails: Film[];
};

export type LoginState = {
  isLoginSubmit:boolean;
  authorizationStatus: AuthorizationStatusType;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
