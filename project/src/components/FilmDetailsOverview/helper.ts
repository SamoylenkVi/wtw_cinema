import { RATING__LEVEL, RATING_SCORE, STARRING_MAX } from './constants';

export const calculateRatingLevel = (rating:number) => {
  if (rating < RATING_SCORE.BAD) {
    return RATING__LEVEL.BAD;
  }
  if (rating < RATING_SCORE.NORMAL) {
    return RATING__LEVEL.NORMAL;
  }
  if (rating < RATING_SCORE.GOOD) {
    return RATING__LEVEL.GOOD;
  } if (rating < RATING_SCORE.AWESOME) {
    return RATING__LEVEL.VERY_GOOD;
  }
  return RATING__LEVEL.AWESOME;
};

export const createStarringList = (starring:string[]) => {
  let start = 'Starring:';

  for (let i = 0; i < starring.length; i++) {
    if (i === starring.length - 1) {
      start = `${start} ${starring[i]}`;
      break;
    }
    if (i === STARRING_MAX) {
      start = `${start} ${starring[i]} and other`;
      break;
    }
    start = `${start} ${starring[i]}, `;
  }
  return start;
};
