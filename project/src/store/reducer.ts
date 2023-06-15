import {createReducer} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import { createGenreList } from '../utils/createGenreList';
import { addFilms } from './action';

type InitialState = {
  films: Film[];
  genres: string[];
  genre: string;
}

const initialState: InitialState = {
  films: [],
  genres: ['All genres'],
  genre: 'All genres',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addFilms, (state, { payload: films}) => {
      state.films = films;
      state.genres = createGenreList(films);
    });
});
