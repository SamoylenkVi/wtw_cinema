import {useEffect, useRef, useState} from 'react';
import {useAppSelector} from '../../hooks';
import {createSelectFilmByFilmId} from '../../store/films-data/selectors';
import {VideoPlayer} from '../VideoPlayer';
import {formatPlayerTime} from './helper';

type PlayerProps = {
  id: number;
  handlePlayerFilm: () => void;
}

export const Player = ({ handlePlayerFilm, id}:PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const selectIsFilmFavorite = createSelectFilmByFilmId(String(id));
  const film = useAppSelector(selectIsFilmFavorite);

  const [filmTime, setFilmTime] = useState<string>();
  const [isFilmPlay, setIsFilmPlay] = useState<boolean>(false);


  const updateFilmTime = () => {
    const formatTime = formatPlayerTime(videoRef.current?.currentTime ?? 1);
    setFilmTime(formatTime);
  };

  const updateDuration = () => {
    const formatTime = formatPlayerTime(videoRef.current?.duration ?? 1);
    setFilmTime(formatTime);
  };

  useEffect(() => {
    const video = videoRef.current;

    if(video) {
      video.addEventListener('timeupdate', updateFilmTime);
      video.addEventListener('durationchange', updateDuration);
    }

    return () => {
      video?.removeEventListener('timeupdate', updateFilmTime);
      video?.removeEventListener('durationchange', updateDuration);
    };

  }, []);


  const handleExitFilm = () => {
    handlePlayerFilm();
  };


  const handlePlayFilm = () => {
    if(isFilmPlay) {
      videoRef.current?.pause();
      setIsFilmPlay(false);
    } else {
      videoRef.current?.play();
      setIsFilmPlay(true);
    }
  };


  if(!film){
    return null;
  }

  return (
    <div className="player">
      <VideoPlayer ref={videoRef} src={film.videoLink} poster={film.previewImage}/>

      <button onClick={handleExitFilm} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{filmTime}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handlePlayFilm} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={!isFilmPlay ? '#play-s' : '#pause'}></use>
            </svg>
            <span>{!isFilmPlay ? 'Play' : 'Pause'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
