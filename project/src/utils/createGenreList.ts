import { Film } from '../types/film';
import { DEFAULT_GENRE } from '../constants';

type Films = Film[];
type Genres = string[]

export const createGenreList = (filmList: Films) => {

  const initialGenreList :Genres = [DEFAULT_GENRE];

  const genres = filmList.reduce((genresList, film) => {
    const currentGenre = film.genre;

    if(!(genresList.includes(currentGenre))) {
      genresList.push(currentGenre);
    }

    return genresList;
  }, initialGenreList);

  return genres;
};
