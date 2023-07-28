import {
  useState, useRef, useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { REGEX_ALT, DEFAULT_FILM_DETAILS_INFORMATION } from '../../constants';
import { createAltText } from '../../utils/createAltText';
import { VideoPlayer} from '../VideoPlayer';


type FilmCardProps = {
  name: string;
  previewImage: string;
  previewVideoLink: string;
  id: number;
  onMouseEnter?: (id: number) => void;
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
  };

  const stopVideo = () => {
    setIsVideo(false);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (isVideo && videoRef.current) {
        setIsVideoError(false);

        videoRef.current.play()
          .catch(() => {
            setIsVideoError(true);
          });
      }
    }, 1000);

    return () => clearTimeout(interval);
  }, [isVideo]);

  return (
    <article onMouseEnter={playVideo} onMouseLeave={stopVideo} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {(isVideo && !isVideoError)
          ? <VideoPlayer src={previewVideoLink} ref={videoRef} poster={previewImage}/>
          : <img src={previewImage} alt={altText} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}/${DEFAULT_FILM_DETAILS_INFORMATION}`}
          className={cn('small-film-card__link', { 'small-film-card__link-video': isVideo })}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

