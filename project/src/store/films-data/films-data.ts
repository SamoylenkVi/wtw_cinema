import { createSlice } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../../constants';
import { FilmsData } from '../../types/state';
import { createGenreList } from '../../utils/createGenreList';
import { fetchAddFilmToFavorite, fetchFilms } from '../api-action';

const initialState: FilmsData = {
  films: [],
  isFilmsDataLoading: false,
  genres: ['All genres'],
  hasError: false,
};

export const filmsData = createSlice({
  name: NAME_SPACE.FilmData,
  initialState,
  reducers: {},
  extraReducers(builder){
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

      .addCase(fetchAddFilmToFavorite.fulfilled, (state, action) => {
        const film = state.films.find((item) => item.id === action.payload.id);

        if (film) {
          film.isFavorite = action.payload.isFavorite;
        }

      });
  }
});
