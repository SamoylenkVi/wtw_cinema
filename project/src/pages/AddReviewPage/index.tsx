import { Link, useParams } from 'react-router-dom';
import { REGEX_ALT } from '../../constants';
import { createAltText } from '../../utils/FilmCard';
import { AddReviewForm } from '../../components/AddReviewForm';
import { films } from '../../mocks/films';
import { Logo } from '../../components/Logo';

export const AddReviewPage = () => {
  const { id } = useParams();

  const film = films.find((item) => item.id === id);

  if (!film) {
    return null;
  }

  const { name, previewImage } = film;

  const altText = createAltText(previewImage, REGEX_ALT);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt={altText} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={'/films/2'} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
};
