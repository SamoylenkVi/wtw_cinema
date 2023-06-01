import {Film} from '../../types/film';
import { SIMILAR_FILMS_MAX } from './constants';

export const findSimilarFilms = (films: Film[], genre: string) => (
  films.filter((film) => film.genre === genre).slice(0, SIMILAR_FILMS_MAX)
);
