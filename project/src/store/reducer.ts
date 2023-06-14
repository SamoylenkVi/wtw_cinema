import {createReducer} from '@reduxjs/toolkit';
import { changeGenre } from './action';

const initialState = {
  genre: 'All genres',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state) => {
      // state.genre = genre;
    });
});
