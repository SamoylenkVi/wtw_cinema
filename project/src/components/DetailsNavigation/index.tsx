import { useState } from 'react';
import cn from 'classnames';
import { NAVIGATION_BUTTONS, NavigationButtonsType } from './constants';
import { capitalizeFirstLetter } from './helper';
import { FilmDetailsContent } from '../FilmDetailsContent';
import {Film} from '../../types/film';

type DetailsNavigationProps = {
  film: Film;
}

export const DetailsNavigation = ({ film }:DetailsNavigationProps) => {
  const [currentButton, setCurrentButton] = useState<NavigationButtonsType>(NAVIGATION_BUTTONS.DETAILS);

  const handlerActiveButton = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLButtonElement;
    const buttonName = target.getAttribute('data-name');

    if (buttonName) {
      if (
        Object
          .values(NAVIGATION_BUTTONS)
          .includes(buttonName as NavigationButtonsType)
      ) {
        setCurrentButton(buttonName as NavigationButtonsType);
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
                className={cn('film-nav__link', { 'film-nav__link--active': currentButton === button })}
              >
                {capitalizeFirstLetter(button)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <FilmDetailsContent film={film} state={currentButton} />
    </>
  );
};
