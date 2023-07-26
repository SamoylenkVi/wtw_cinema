import {useEffect} from 'react';
import { FilmCardMain } from '../../components/FilmCardMain';
import { FilmList } from '../../components/FilmList';
import { Footer } from '../../components/Footer';
import {GenresList} from '../../components/GenresList';
import { useAppDispatch } from '../../hooks';
import {fetchFilms} from '../../store/api-action';

// TODO Remove when it's will be finished
const FilmInformation = {
  Name: 'Shutter',
  Genre: 'comedy',
  ReleaseDate: 2015,
} as const;


export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);


  return (
    <>
      <FilmCardMain
        name= {FilmInformation.Name}
        genre={FilmInformation.Genre}
        releaseDate={FilmInformation.ReleaseDate}
      />

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


