import {createSelector} from '@reduxjs/toolkit';
import { State } from '../../types/state';

export const selectFilms = (state:State) => state.FILMS_DATA.films;

export const selectIsFilmsDataLoading = (state:State) => state.FILMS_DATA.isFilmsDataLoading;

export const selectGenres = (state:State) => state.FILMS_DATA.genres;

const selectFilmsIsFavoriteByFilmId = createSelector(
  selectFilms,
  (state: State, id: string) => Number(id),
  (films, id) => {
    const filmById = films.find((film) => film.id === id);
    return filmById?.isFavorite ?? null;
  }
);

export const createSelectFilmsIsFavoriteByFilmId = (id: string) =>
  (state: State) => selectFilmsIsFavoriteByFilmId(state, id);

