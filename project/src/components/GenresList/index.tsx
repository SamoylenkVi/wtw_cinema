import cn from 'classnames';
import {useState} from 'react';
import {DEFAULT_GENRE} from '../../constants';
import { useAppSelector} from '../../hooks';

export const GenresList = () => {
  const genreList = useAppSelector((state) => state.genres);
  const [currentGenre, setCurrentGenre ] = useState(DEFAULT_GENRE);

  return (
    <ul className="catalog__genres-list">
      {
        genreList.map((genre) => (
          <li key={genre}
            className = {cn('catalog__genres-item', { 'catalog__genres-item--active': currentGenre === genre})}
          >
            <a
              href='#'
              // onClick={changeGenreHandler(genre)}
              className="catalog__genres-link"
            > {genre}
            </a>
          </li>
        ))
      }
    </ul>
  );
};
