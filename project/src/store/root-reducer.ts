import { combineReducers } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../constants';
import { filmsData } from './films-data/films-data';
import { filmData } from './film-data/film-data';
import { login } from './login/login';


export const rootReducer = combineReducers ({
  [NAME_SPACE.FilmsData]: filmsData.reducer,
  [NAME_SPACE.FilmData]: filmData.reducer,
  [NAME_SPACE.Login]: login.reducer,
});
