import {
  useState, useRef,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { REGEX_ALT } from '../../constants';
import { createAltText } from '../../utils/FilmCard';
import { VideoPlayer} from '../VideoPlayer';


type FilmCardProps = {
  name: string;
  previewImage: string;
  previewVideoLink: string;
  id: string;
  onMouseEnter?: (id: string) => void;
}

export const FilmCard = ({
  name, previewImage, previewVideoLink, id, onMouseEnter,
}:FilmCardProps) => {

  const videoRef = useRef<HTMLVideoElement>(null);

  const altText = createAltText(previewImage, REGEX_ALT);
  const [isVideo, setIsVideo] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  const playVideo = () => {
    if (onMouseEnter) {
      onMouseEnter(id);
    }
    setIsVideo(true);

    if (isVideo && videoRef.current) {
      setIsVideoError(false);

      videoRef.current.play().catch(() => {
        setIsVideoError(true);
      });
    }
  };

  const stopVideo = () => {
    setIsVideo(false);
  };

  return (
    <article onMouseEnter={playVideo} onMouseLeave={stopVideo} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {(isVideo && !isVideoError)
          ? <VideoPlayer src={previewVideoLink} ref={videoRef} />
          : <img src={previewImage} alt={altText} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          className={cn('small-film-card__link', { 'small-film-card__link-video': isVideo })}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};
