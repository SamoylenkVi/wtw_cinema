import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import {DEFAULT_GENRE, QUERY_PARAM } from '../../constants';
import { useAppSelector} from '../../hooks';

export const GenresList = () => {
  const genreList = useAppSelector((state) => state.genres);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGenre = searchParams.get(QUERY_PARAM.GENRE) ?? DEFAULT_GENRE;

  const changeGenreHandler = (genre: string) => (
    (evt : React.MouseEvent) => {
      evt.preventDefault();
      setSearchParams({'genre': genre});
    }
  );


  return (
    <ul className="catalog__genres-list">
      {
        genreList.map((genre) => {
          const genreClassName = cn('catalog__genres-item', { 'catalog__genres-item--active': selectedGenre === genre});

          return (
            <li key={genre}
              className = { genreClassName }
            >
              <a
                href='#'
                onClick={changeGenreHandler(genre)}
                className="catalog__genres-link"
              > {genre}
              </a>
            </li>);
        })
      }
    </ul>
  );
};
