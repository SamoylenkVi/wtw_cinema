import { createSlice } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../../constants';
import { FavoriteFilmsData } from '../../types/state';
import { fetchFavoritesFilms, fetchAddFilmToFavorite } from '../api-action';

const initialState: FavoriteFilmsData = {
  favoriteFilms: [],
};

export const favoriteFilms = createSlice({
  name: NAME_SPACE.FavoriteFilmsData,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchFavoritesFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })

      .addCase(fetchAddFilmToFavorite.fulfilled, (state, action) => {

        const indexFilm = state.favoriteFilms.findIndex((item) => item.id === action.payload.id);

        if(indexFilm >= 0) {
          state.favoriteFilms.splice(indexFilm, 1);
        } else {

          state.favoriteFilms.push(action.payload);
        }
      });
  }
});
