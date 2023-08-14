import { combineReducers } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../constants';
import { filmsData } from './films-data/films-data';
import { filmData } from './film-data/film-data';
import { login } from './login/login';
import { favoriteFilms } from './favorite-films/favorite-films';


export const rootReducer = combineReducers ({
  [NAME_SPACE.FilmsData]: filmsData.reducer,
  [NAME_SPACE.FilmData]: filmData.reducer,
  [NAME_SPACE.Login]: login.reducer,
  [NAME_SPACE.FavoriteFilmsData]: favoriteFilms.reducer,
});
