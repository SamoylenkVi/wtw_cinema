import { fetchAddFilmToFavorite } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createSelectFilmByFilmId} from '../../store/films-data/selectors';
import { selectFavoriteFilms } from '../../store/favorite-films/selectors';

type AddFilmFavoriteButtonProps = {
  id: string;
}

export const AddFilmFavoriteButton = ({id}:AddFilmFavoriteButtonProps) => {
  const dispatch = useAppDispatch();

  const selectIsFilmFavorite = createSelectFilmByFilmId(id);
  const film = useAppSelector(selectIsFilmFavorite);

  const handleAddFilmFavorite = () => {
    const status = Number(!film?.isFavorite);
    dispatch(fetchAddFilmToFavorite({id, status}));
  };

  const favoriteFilms = useAppSelector(selectFavoriteFilms);

  return (
    <button onClick={ handleAddFilmFavorite } className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film?.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      { favoriteFilms && <span className="film-card__count">{favoriteFilms.length}</span> }
    </button>
  );
};
