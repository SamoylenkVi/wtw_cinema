import { State } from '../types/state';

export const selectAuthorizationStatus = (state:State) => state.authorizationStatus;

export const selectGenres = (state:State) => state.genres;

export const selectComments = (state:State) => state.filmComments;

export const selectFilms = (state:State) => state.films;

export const selectFilmDetails = (state:State) => state.filmDetail;

export const selectIsFilmsDataLoading = (state:State) => state.isFilmsDataLoading;

export const selectIsLoginSubmit = (state:State) => state.isLoginSubmit;

export const selectSimilarFilms = (state:State) => state.similarFilmDetails;
