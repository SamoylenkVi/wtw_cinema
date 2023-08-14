import {useEffect} from 'react';
import { FilmCardMain } from '../../components/FilmCardMain';
import { FilmList } from '../../components/FilmList';
import { Footer } from '../../components/Footer';
import {GenresList} from '../../components/GenresList';
import { useAppDispatch } from '../../hooks';
import {fetchFilms} from '../../store/api-action';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filmsPromise = dispatch(fetchFilms());

    return () => filmsPromise.abort();

  }, [dispatch]);


  return (
    <>
      <FilmCardMain/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmList />
        </section>
        <Footer />
      </div>
    </>
  );
};


