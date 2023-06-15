import { Film } from '../types/film';
import { DEFAULT_GENRE } from '../constants';

type Films = Film[];
type GenresMap = string[]

export const createGenreList = (filmList: Films) => {

  const initialGenreList :GenresMap = [DEFAULT_GENRE];

  const genresMap = filmList.reduce((genresList, film) => {
    const currentGenre = film.genre;

    if(!(genresList.includes(currentGenre))) {
      genresList.push(currentGenre);
    }

    return genresList;
  }, initialGenreList);

  return genresMap;
};
