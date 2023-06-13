import { forwardRef } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
}


export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ src, poster}, ref) => (
  <video
    className="player__video"
    muted
    ref={ref}
    poster={poster}
  >
    <source src={src} type="video/mp4" />
  </video>
));

VideoPlayer.displayName = 'VideoPlayer';
