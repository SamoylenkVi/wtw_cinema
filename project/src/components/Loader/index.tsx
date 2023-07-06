import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <div className='loader-wrapper'>
    <h2>loading</h2>
    <ThreeDots
      height="20"
      width="20"
      radius="9"
      color="#C9B37E"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        alignItems: 'end',
      }}
      wrapperClass=""
      visible
    />
  </div>
);
