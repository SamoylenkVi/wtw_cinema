export const formatPlayerTime = (time:number):string => {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor(time / 60);
  const second = Math.floor(time % 60);

  if (hour) {
    return ` - ${hour}:${minute}:${second}`;
  }
  return ` - ${minute}:${second}`;
};
