import { calculateRatingLevel, createStarringList } from './helper';

type FilmDetailsOverviewProps = {
  director: string;
  description: string;
  rating: number;
  starring: string[];
  scoresCount: number;
}

export const FilmDetailsOverview = ({
  director, description, rating, starring, scoresCount,
}:FilmDetailsOverviewProps) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{calculateRatingLevel(rating)}</span>
        <span className="film-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{description}</p>

      <p className="film-card__director"><strong>Director: {director}</strong></p>

      <p className="film-card__starring"><strong>{createStarringList(starring)}</strong></p>
    </div>
  </>
);
