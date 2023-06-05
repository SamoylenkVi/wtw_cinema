import { FilmCardMain } from '../../components/FilmCardMain';
import { FilmList } from '../../components/FilmList';
import { Footer } from '../../components/Footer';
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

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <FilmList films={films} />
      </section>
      <Footer />
    </div>
  </>
);
