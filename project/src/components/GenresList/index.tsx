import cn from 'classnames';
import { useAppSelector} from '../../hooks';
const DEFAULT_GENRE = 'All genres';


export const GenresList = () => {
  const genreList = useAppSelector((state) => state.genres);

  return (
    <ul className="catalog__genres-list">
      {
        genreList.map((genre) => (
          <li key={genre}
            className = {cn('catalog__genres-item', { 'catalog__genres-item--active': DEFAULT_GENRE === genre})}
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
