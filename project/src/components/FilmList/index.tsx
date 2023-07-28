import { useEffect, useMemo, useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import { FilmCard } from '../FilmCard/index';
import { DEFAULT_GENRE, FILM_CARD_COUNT, QUERY_PARAM} from '../../constants';
import { useAppSelector} from '../../hooks';
import {ShowMoreButton} from '../ShowMoreButton';
import { Loader } from '../Loader';
import {Film} from '../../types/film';
import {selectFilms, selectIsFilmsDataLoading} from '../../selectors';

export const FilmList = () => {
  const films = useAppSelector(selectFilms);
  const isFilmsLoading = useAppSelector(selectIsFilmsDataLoading);

  //TODO fix this;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState<Film['id']>();
  const [countFilms, setCountFilms] = useState(FILM_CARD_COUNT);

  const [searchParams] = useSearchParams();
  const genreParams = searchParams.get(QUERY_PARAM.GENRE);

  const filteredFilms = useMemo<Film[]>(() => {
    if (!genreParams || genreParams === DEFAULT_GENRE) {
      return films;
    }

    return films.filter((film) => film.genre === genreParams);
  }, [films, genreParams]);

  const isShowMoreButtonVisible = filteredFilms.length > countFilms;

  useEffect(() => {
    setCountFilms(FILM_CARD_COUNT);
  }, [genreParams]);


  const handleShowMoreFilmsClick = () => {
    setCountFilms((prevContFilms) => (prevContFilms + FILM_CARD_COUNT));
  };

  const handleMouseEnter = (id:number) => {
    setActiveCardId(id);
  };

  if (isFilmsLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="catalog__films-list">
        {
          filteredFilms.slice(0, countFilms).map((film) => (
            <FilmCard
              key={film.id}
              name = {film.name}
              previewImage = {film.previewImage}
              previewVideoLink = {film.previewVideoLink}
              id = {film.id}
              onMouseEnter={handleMouseEnter}
            />
          ))
        }
      </div>

      {isShowMoreButtonVisible && <ShowMoreButton onClick={handleShowMoreFilmsClick}/>}
    </>
  );
};
