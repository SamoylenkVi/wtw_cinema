import { useEffect, useState } from 'react';
import { FilmReview } from '../FilmReview/index';
import { createApi } from '../../services/api';
import {Comment} from '../../types/comment';

const api = createApi();

type FilmDetailsReviewProps = {
  id: number;
}

export const FilmDetailsReview = ({ id }:FilmDetailsReviewProps) => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    api.get<Comment[]>(`/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  },[id]);

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
