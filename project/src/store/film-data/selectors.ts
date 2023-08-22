
import { State } from '../../types/state';

export const selectComments = (state:State) => state.FILM_DATA.filmComments;
export const selectFilmDetails = (state:State) => state.FILM_DATA.filmDetail;
export const selectPromoFilm = (state:State) => state.FILM_DATA.promoFilm;
export const selectSimilarFilms = (state:State) => state.FILM_DATA.similarFilmDetails;

