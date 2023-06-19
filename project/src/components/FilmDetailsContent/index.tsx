import { comments } from '../../mock-server/comments';
import { FilmDetailsOverview } from '../FilmDetailsOverview/index';
import { FilmDetailsInformation } from '../FilmDetailsInformation/index';
import { FilmDetailsReview } from '../FilmDetailsReview/index';
import { NAVIGATION_BUTTONS } from '../DetailsNavigation/constants';
import {Film} from '../../types/film';

type FilmDetailsContentProps = {
  film: Film;
  state: string;
}

export const FilmDetailsContent = ({ film, state }:FilmDetailsContentProps) => {
  const {
    director, starring, runTime, released, genre, description, rating, scoresCount,
  } = film;

  switch (state) {
    case NAVIGATION_BUTTONS.OVERVIEW:
      return (
        <FilmDetailsOverview
          director={director}
          description={description}
          rating={rating}
          starring={starring}
          scoresCount={scoresCount}
        />
      );
    case NAVIGATION_BUTTONS.DETAILS:
      return (
        <FilmDetailsInformation
          director={director}
          starring={starring}
          runTime={runTime}
          genre={genre}
          released={released}
        />
      );
    case NAVIGATION_BUTTONS.REVIEWS:
      return <FilmDetailsReview comments={comments}/>;
    default:
      return null;
  }
};

