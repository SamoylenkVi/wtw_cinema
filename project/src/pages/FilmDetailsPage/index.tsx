import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer/index';
import { films } from '../../mock-server/films';
import { REGEX_ALT } from '../../constants';
import { createAltText } from '../../utils/createAltText';
import { FilmCard } from '../../components/FilmCard/index';
import { DetailsNavigation } from '../../components/DetailsNavigation/index';
import { findSimilarFilms } from './helper';
import { Logo } from '../../components/Logo';

export const FilmDetailsPage = () => {
  const { id } = useParams<string>();
  const film = films.find((item) => item.id === id);

  if (!film) {
    return null;
  }

  const { name, previewImage, genre, released } = film;

  const similarFilms = findSimilarFilms(films, genre);

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

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to={'/login'} className="user-block__link">Sign out</Link>
              </li>
            </ul>
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
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
