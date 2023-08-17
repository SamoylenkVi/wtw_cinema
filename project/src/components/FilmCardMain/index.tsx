import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesFilms, fetchPromoFilm } from '../../store/api-action';
import {selectPromoFilm} from '../../store/film-data/selectors';
import {AddFilmFavoriteButton} from '../AddFilmFavoriteButton';
import { Authorization } from '../Authorization';
import { Logo } from '../Logo';
import { createAltText } from '../../utils/createAltText';
import {REGEX_ALT} from '../../constants';
import {PlayFilmButton} from '../PlayFilmButton/intex';

export const FilmCardMain = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favoriteFilmsPromise = dispatch(fetchFavoritesFilms());
    const promoFilmPromise = dispatch(fetchPromoFilm());

    return () => {
      favoriteFilmsPromise.abort();
      promoFilmPromise.abort();
    };

  }, [dispatch]);

  const promoFilm = useAppSelector(selectPromoFilm);

  if(!promoFilm) {
    return null;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.posterImage} alt={createAltText(promoFilm.posterImage, REGEX_ALT)} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <Authorization />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.previewImage} alt={createAltText(promoFilm.previewImage, REGEX_ALT)} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayFilmButton id={promoFilm.id}/>
              <AddFilmFavoriteButton id={String(promoFilm.id)} />
            </div>

          </div>
        </div>
      </div>
    </section>

  );
};
