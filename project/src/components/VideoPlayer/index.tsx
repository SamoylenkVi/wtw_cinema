import { forwardRef } from 'react';

type VideoPlayerProps = {
  src: string;
}


export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ src }, ref) => (
  <video
    className="player__video"
    muted
    autoPlay
    ref={ref}
  >
    <source src={src} type="video/mp4" />
  </video>
));

VideoPlayer.displayName = 'VideoPlayer';
