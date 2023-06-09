import { useState } from 'react';
import { useNavigate, useParams, generatePath} from 'react-router-dom';
import cn from 'classnames';
import { NAVIGATION_BUTTONS, NavigationButtonsType } from './constants';
import { capitalizeFirstLetter } from './helper';
import { FilmDetailsContent } from '../FilmDetailsContent';
import {Film} from '../../types/film';

type DetailsNavigationProps = {
  film: Film;
}


export const DetailsNavigation = ({ film }:DetailsNavigationProps) => {

  const {id} = useParams();
  const {currentInformation} = useParams();
  const navigate = useNavigate();

  const [, setCurrentButton] = useState<NavigationButtonsType>(currentInformation as NavigationButtonsType);


  const handlerActiveButton = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLButtonElement;
    const buttonName = target.getAttribute('data-name');

    if (buttonName && id) {
      if (
        Object
          .values(NAVIGATION_BUTTONS)
          .includes(buttonName as NavigationButtonsType)
      ) {
        setCurrentButton(buttonName as NavigationButtonsType);

        const path = generatePath('/films/:id/:currentInformation', {
          id: id,
          currentInformation: buttonName,
        });
        navigate(path, {replace: true});
      }
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          { Object.values(NAVIGATION_BUTTONS).map((button) => (
            <li className="film-nav__item" key={button}>
              <button
                data-name={button}
                onClick={handlerActiveButton}
                className={cn('film-nav__link', { 'film-nav__link--active': currentInformation === button })}
              >
                {capitalizeFirstLetter(button)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {currentInformation && <FilmDetailsContent film={film} state={currentInformation} /> }
    </>
  );
};
