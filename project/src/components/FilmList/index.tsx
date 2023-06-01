import { useState } from 'react';
import { FilmCard } from '../FilmCard/index';

type Film = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

type FilmListProps = {
  films: Film[];
}

export const FilmList = ({ films }:FilmListProps) => {
  const [, setActiveCardId] = useState('');

  const handleMouseEnter = (id:string) => {
    setActiveCardId(id);
  };

  return (
    <>
      <div className="catalog__films-list">
        {Array.from(
          { length: films.length},
          (_, index) => (
            <FilmCard
              key={films[index].id}
              name = {films[index].name}
              previewImage = {films[index].previewImage}
              previewVideoLink = {films[index].previewVideoLink}
              id = {films[index].id}
              onMouseEnter={handleMouseEnter}
            />
          ),
        )}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};
