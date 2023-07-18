import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsAction} from '../../store/api-action';
import { FilmReview } from '../FilmReview/index';


type FilmDetailsReviewProps = {
  id: number;
}

export const FilmDetailsReview = ({ id }:FilmDetailsReviewProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!id) {
      return;
    }
    dispatch(fetchCommentsAction(id));

  }, [id, dispatch]);

  const comments = useAppSelector((state) => state.filmComments);

  if(!comments) {
    return null;
  }

  const commentComponents = comments.map((comment) => (
    <FilmReview
      commentData={comment} key={comment.id}
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
