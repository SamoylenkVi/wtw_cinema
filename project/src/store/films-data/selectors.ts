import { State } from '../../types/state';

export const selectFilms = (state:State) => state.FILMS_DATA.films;
export const selectIsFilmsDataLoading = (state:State) => state.FILMS_DATA.isFilmsDataLoading;
export const selectGenres = (state:State) => state.FILMS_DATA.genres;
