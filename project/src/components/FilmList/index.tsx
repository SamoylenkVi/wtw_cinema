import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { FilmCard } from '../FilmCard/index';
import { DEFAULT_GENRE } from '../../constants';
import { useAppSelector} from '../../hooks';


export const FilmList = () => {
  let films = useAppSelector((state) => state.films);
  const [, setActiveCardId] = useState('');
  const search = useLocation().search;
  const genreParams = new URLSearchParams(search).get('genre');


  if (genreParams) {
    films = genreParams === DEFAULT_GENRE
      ?
      films
      :
      films.filter((film) => film.genre === genreParams);
  }

  const handleMouseEnter = (id:string) => {
    setActiveCardId(id);
  };

  return (
    <>
      <div className="catalog__films-list">
        {
          films.map((_, index) => (
            <FilmCard
              key={films[index].id}
              name = {films[index].name}
              previewImage = {films[index].previewImage}
              previewVideoLink = {films[index].previewVideoLink}
              id = {films[index].id}
              onMouseEnter={handleMouseEnter}
            />
          ))
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};
