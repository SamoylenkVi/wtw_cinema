import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { createGenreList } from '../utils/createGenreList';
import { AUTHORIZATION_STATUS } from '../constants';
import { AuthorizationStatusType } from '../constants';
import { requireAuthorization } from './action';
import { Comment } from '../types/comment';
import {
  fetchCommentsAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchSimilarFilmsAction
} from './api-action';


type InitialState = {
  films: Film[];
  filmDetail: Film | null;
  filmComments: Comment[];
  similarFilmDetails: Film[];
  genres: string[];
  isFilmsDataLoading: boolean;
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
  hasError: false,
  authorizationStatus: AUTHORIZATION_STATUS.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilmsAction.pending, (state) => {
      state.isFilmsDataLoading = true;
      state.hasError = false;
    })

    .addCase(fetchFilmsAction.fulfilled, (state, action) => {
      state.films = action.payload;
      state.genres = createGenreList(state.films);
      state.isFilmsDataLoading = false;
    })

    .addCase(fetchFilmsAction.rejected, (state) => {
      state.isFilmsDataLoading = false;
      state.hasError = true;
    })

    .addCase(fetchFilmAction.fulfilled, (state, action) => {
      state.filmDetail = action.payload;
    })

    .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
      state.similarFilmDetails = action.payload;
    })

    .addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.filmComments = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
