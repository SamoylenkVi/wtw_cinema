import { formatRunTime } from './helper';

type FilmDetailsInformationProps = {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
}

export const FilmDetailsInformation = ({
  director, starring, runTime, genre, released,
}:FilmDetailsInformationProps) => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {starring.map((item, index) => {
            if (index === starring.length - 1) {
              return item;
            }
            return (
              <>
                {item}, <br></br>
              </>);
          })}
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{formatRunTime(runTime)}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{released}</span>
      </p>
    </div>
  </div>
);
