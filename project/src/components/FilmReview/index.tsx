import { formatData } from '../../utils/date';
import { DATA_FORMAT_ATTRIBUTE, DATA_FORMAT_TEXT } from '../../constants';
import { Comment } from '../../types/comment';

type FilmReviewProps = {
  comment: Comment;
}

export const FilmReview = ({ comment }:FilmReviewProps) => {
  const {
    user, rating, commentText, date,
  } = comment;

  const { name } = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{commentText}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={formatData(date, DATA_FORMAT_ATTRIBUTE)}>{formatData(date, DATA_FORMAT_TEXT)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

