import { FilmCardMain } from '../../components/FilmCardMain';
import { FilmList } from '../../components/FilmList';
import { Footer } from '../../components/Footer';
import {GenresList} from '../../components/GenresList';
import { Film } from '../../types/film';

type MainPageProps = {
  films: Film[];
}

const FilmInformation = {
  Name: 'Shutter',
  Genre: 'comedy',
  ReleaseDate: 2015,
} as const;


export const MainPage = ({films}: MainPageProps) => (
  <>
    <FilmCardMain
      name= {FilmInformation.Name}
      genre={FilmInformation.Genre}
      releaseDate={FilmInformation.ReleaseDate}
    />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList></GenresList>
        <FilmList films={films} />
      </section>
      <Footer />
    </div>
  </>
);
