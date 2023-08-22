import {useState} from 'react';
import {createPortal} from 'react-dom';
import { Player } from '../Player';

type PlayFilmButtonProps = {
  id: number;
}

export const PlayFilmButton = ({id}:PlayFilmButtonProps) => {
  const [isFilmPlay, setIsFilmPlay] = useState(false);

  const handlePlayerFilm = () => {
    setIsFilmPlay((prev) => !prev);
  };

  return (
    <>
      <button onClick={handlePlayerFilm} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      {createPortal(
        isFilmPlay && <Player handlePlayerFilm={handlePlayerFilm} id={id}/>,
        document.getElementById('root') ?? document.body
      )}
    </>
  );
};

