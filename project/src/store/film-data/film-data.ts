import { createSlice } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../../constants';
import { FilmData } from '../../types/state';
import {fetchAddFilmToFavorite, fetchComments, fetchFilm, fetchPromoFilm, fetchSimilarFilms} from '../api-action';


const initialState:FilmData = {
  filmDetail: null,
  promoFilm: null,
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

      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })

      .addCase(fetchComments.fulfilled, (state, action) => {
        state.filmComments = action.payload;
      })

      .addCase(fetchAddFilmToFavorite.fulfilled, (state, action) => {
        if(state.filmDetail) {
          state.filmDetail.isFavorite = action.payload.isFavorite;
        }

        if (state.promoFilm && action.payload.id === state.promoFilm.id) {
          state.promoFilm.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

