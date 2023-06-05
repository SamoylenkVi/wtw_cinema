import React, { useState } from 'react';
import { RATING_FILM } from '../../constants';

const ratings = Array.from({ length: RATING_FILM }, (_, index) => index + 1);

export const AddReviewForm = () => {
  const [, setReview] = useState({
    rating: '',
    commentText: '',
  });

  const handleRatingFilm = (evt: React.ChangeEvent<HTMLInputElement> ) => {
    const target = evt.target as HTMLInputElement;

    setReview((prevReview) => ({ ...prevReview, rating: target.value }));
  };

  const handleCommentText = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = evt.target as HTMLTextAreaElement;

    setReview((prevReview) => ({ ...prevReview, commentText: target.value }));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              ratings.map((rating) => (
                <React.Fragment key={rating}>
                  <input
                    onChange={handleRatingFilm}
                    className="rating__input"
                    id={`star-${rating}`}
                    type="radio"
                    name="rating"
                    value={rating}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${rating}`}
                  > {`Rating ${rating}`}
                  </label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={handleCommentText} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};
