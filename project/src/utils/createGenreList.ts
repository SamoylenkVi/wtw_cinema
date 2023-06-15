import { Film } from '../types/film';

type Films = Film[];
type GenresMap = string[]

export const createGenreList = (filmList: Films) => {

  const initialGenreList :GenresMap = ['All genres'];

  const genresMap = filmList.reduce((genresList, film) => {
    const currentGenre = film.genre;

    if(!(genresList.includes(currentGenre))) {
      genresList.push(currentGenre);
    }

    return genresList;
  }, initialGenreList);

  return genresMap;
};
