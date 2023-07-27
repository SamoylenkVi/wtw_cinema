import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { createGenreList } from '../utils/createGenreList';
import { AUTHORIZATION_STATUS } from '../constants';
import { AuthorizationStatusType } from '../constants';
import { requireAuthorization } from './action';
import { Comment } from '../types/comment';
import {
  fetchComments,
  fetchFilm,
  fetchFilms,
  fetchLogin,
  fetchSimilarFilms
} from './api-action';


type InitialState = {
  films: Film[];
  filmDetail: Film | null;
  filmComments: Comment[];
  similarFilmDetails: Film[];
  genres: string[];
  isFilmsDataLoading: boolean;
  isLoginSubmit:boolean;
  hasError: boolean;
  authorizationStatus: AuthorizationStatusType;
}

const initialState: InitialState = {
  films: [],
  filmDetail: null,
  filmComments: [],
  similarFilmDetails: [],
  genres: ['All genres'],
  isFilmsDataLoading: false,
  isLoginSubmit:false,
  hasError: false,
  authorizationStatus: AUTHORIZATION_STATUS.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilms.pending, (state) => {
      state.isFilmsDataLoading = true;
      state.hasError = false;
    })

    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.genres = createGenreList(state.films);
      state.isFilmsDataLoading = false;
    })

    .addCase(fetchFilms.rejected, (state) => {
      state.isFilmsDataLoading = false;
      state.hasError = true;
    })

    .addCase(fetchFilm.fulfilled, (state, action) => {
      state.filmDetail = action.payload;
    })

    .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
      state.similarFilmDetails = action.payload;
    })

    .addCase(fetchComments.fulfilled, (state, action) => {
      state.filmComments = action.payload;
    })

    .addCase(fetchLogin.pending, (state) => {
      state.isLoginSubmit = true;
    })

    .addCase(fetchLogin.fulfilled, (state) => {
      state.isLoginSubmit = false;
    })

    .addCase(fetchLogin.rejected, (state) => {
      state.isLoginSubmit = false;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
