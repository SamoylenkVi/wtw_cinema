import { createSlice } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../../constants';
import { FilmData } from '../../types/state';
import {fetchComments, fetchFilm, fetchSimilarFilms} from '../api-action';


const initialState:FilmData = {
  filmDetail: null,
  filmComments: [],
  similarFilmDetails: [],
};

export const filmData = createSlice({
  name: NAME_SPACE.FilmsData,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.filmDetail = action.payload;
      })

      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilmDetails = action.payload;
      })

      .addCase(fetchComments.fulfilled, (state, action) => {
        state.filmComments = action.payload;
      });
  }
});

