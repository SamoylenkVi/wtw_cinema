import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer/index';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { REGEX_ALT } from '../../constants';
import { createAltText } from '../../utils/createAltText';
import { FilmCard } from '../../components/FilmCard/index';
import { DetailsNavigation } from '../../components/DetailsNavigation/index';
import { Logo } from '../../components/Logo';
import {fetchFilm, fetchSimilarFilms} from '../../store/api-action';
import {selectFilmDetails, selectSimilarFilms} from '../../store/film-data/selectors';
import { AddFilmFavoriteButton } from '../../components/AddFilmFavoriteButton';
import {Authorization} from '../../components/Authorization';


export const FilmDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  useEffect(() => {
    if(!id) {
      return;
    }
    const filmPromise = dispatch(fetchFilm(id));
    const similarFilmPromise = dispatch(fetchSimilarFilms(id));

    return () => {
      filmPromise.abort();
      similarFilmPromise.abort();
    };

  }, [id, dispatch]);

  const film = useAppSelector(selectFilmDetails);
  const similarFilms = useAppSelector(selectSimilarFilms);

  if (!film) {
    return null;
  }

  if (!id) {
    return null;
  }

  const { name, previewImage, posterImage, genre, released } = film;

  const altText = createAltText(previewImage, REGEX_ALT);

  return (
    <>
      <section className="film-card film-card--full">
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={previewImage} alt={altText} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <Authorization />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddFilmFavoriteButton id={id}/>
                {(id !== undefined) && (
                  <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <DetailsNavigation film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms.map((similarFilm) => (
              <FilmCard
                key = {similarFilm.id}
                name = {similarFilm.name}
                previewImage = {similarFilm.previewImage}
                previewVideoLink = {similarFilm.previewVideoLink}
                id = {similarFilm.id}
              />
            )
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};
