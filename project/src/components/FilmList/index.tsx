import { useEffect, useMemo, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { FilmCard } from '../FilmCard/index';
import { DEFAULT_GENRE, FILM_CARD_COUNT } from '../../constants';
import { useAppSelector} from '../../hooks';
import {ShowMoreButton} from '../ShowMoreButton';
import {Film} from '../../types/film';


export const FilmList = () => {
  const films = useAppSelector((state) => state.films);

  const [, setActiveCardId] = useState('');
  const [countFilms, setCountFilms] = useState(FILM_CARD_COUNT);

  const {search} = useLocation();
  const genreParams = new URLSearchParams(search).get('genre');

  const filteredFilms = useMemo<Film[]>(() => {
    if (genreParams === DEFAULT_GENRE) {
      return films;
    }

    return films.filter((film) => film.genre === genreParams);
  }, [films, genreParams]);


  useEffect(() => {
    setCountFilms(FILM_CARD_COUNT);
  }, [genreParams]);


  const showMoreFilmsHandler = () => {
    setCountFilms((prevContFilms) => (prevContFilms + FILM_CARD_COUNT));
  };

  const handleMouseEnter = (id:string) => {
    setActiveCardId(id);
  };


  return (
    <>
      <div className="catalog__films-list">
        {
          filteredFilms.slice(0, countFilms).map((_, index) => (
            <FilmCard
              key={filteredFilms[index].id}
              name = {filteredFilms[index].name}
              previewImage = {filteredFilms[index].previewImage}
              previewVideoLink = {filteredFilms[index].previewVideoLink}
              id = {filteredFilms[index].id}
              onMouseEnter={handleMouseEnter}
            />
          ))
        }
      </div>

      {filteredFilms.length > countFilms && <ShowMoreButton onClick={showMoreFilmsHandler}/>}
    </>
  );
};
