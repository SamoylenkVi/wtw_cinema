import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { REGEX_ALT } from '../../constants';
import { createAltText } from '../../utils/createAltText';
import { AddReviewForm } from '../../components/AddReviewForm';
import { Logo } from '../../components/Logo';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFilm } from '../../store/api-action';

export const AddReviewPage = () => {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const film = useAppSelector((state) => state.filmDetail);

  useEffect(() => {

    if(!id ) {
      return;
    }

    if (film && id === film.id.toString()) {
      return;
    }

    dispatch(fetchFilm(id));

  },[id, dispatch, film]);


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
                { id && <Link to={`/films/${id}/details`} className="breadcrumbs__link">{name}</Link> }
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={''}>Add review</Link>
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
      {
        id && <AddReviewForm id={id}/>
      }

    </section>
  );
};
