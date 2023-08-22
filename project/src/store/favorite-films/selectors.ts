import { State } from '../../types/state';

export const selectFavoriteFilms = (state:State) => state.FAVORITE_FILMS_DATA.favoriteFilms;
