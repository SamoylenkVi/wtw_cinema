import PropTypes from 'prop-types';
import { FilmReview } from '../FilmReview/index';
import { Comment } from '../../types/comment';

type FilmDetailsReviewProps = {
  comments: Comment[];
}

export const FilmDetailsReview = ({ comments }:FilmDetailsReviewProps) => {
  const commentComponents = comments.map((comment) => (
    <FilmReview
      comment={comment} key={comment.id}
    />
  ));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {commentComponents.slice(0, 3)}
      </div>
      <div className="film-card__reviews-col">
        {commentComponents.slice(3, 6)}
      </div>
    </div>
  );
};

FilmDetailsReview.propTypes = {
  comments: PropTypes.object,
};
