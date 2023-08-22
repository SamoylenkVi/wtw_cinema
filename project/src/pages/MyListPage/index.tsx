import {useEffect} from 'react';
import {Authorization} from '../../components/Authorization';
import {FilmCard} from '../../components/FilmCard';
import {Footer} from '../../components/Footer';
import {Logo} from '../../components/Logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoritesFilms} from '../../store/api-action';
import { selectFavoriteFilms } from '../../store/favorite-films/selectors';


export const MyListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favoriteFilmsPromise = dispatch(fetchFavoritesFilms());
    return () => {
      favoriteFilmsPromise.abort();
    };
  }, [dispatch]);

  const favoriteFilms = useAppSelector(selectFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>

        <Authorization />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            favoriteFilms.map((film) => (
              <FilmCard
                key={film.id}
                name = {film.name}
                previewImage = {film.previewImage}
                previewVideoLink = {film.previewVideoLink}
                id = {film.id}
              />
            ))
          }
        </div>
      </section>

      <Footer />
    </div>
  );
};

