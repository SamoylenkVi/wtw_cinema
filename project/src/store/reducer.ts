import {createReducer} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import { createGenreList } from '../utils/createGenreList';
import { fetchFilmsAction } from './api-action';

type InitialState = {
  films: Film[];
  genres: string[];
  isFilmsDataLoading: boolean;
  hasError: boolean;
}

const initialState: InitialState = {
  films: [],
  genres: ['All genres'],
  isFilmsDataLoading: false,
  hasError: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilmsAction.pending, (state) => {
      state.isFilmsDataLoading = true;
      state.hasError = false;
    })

    .addCase(fetchFilmsAction.fulfilled, (state, action) => {
      state.films = state.films.concat(action.payload);
      state.genres = createGenreList(state.films);
      state.isFilmsDataLoading = false;
    })

    .addCase(fetchFilmsAction.rejected, (state) => {
      state.isFilmsDataLoading = false;
      state.hasError = true;
    });
});
