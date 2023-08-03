import { Navigate } from 'react-router';
import { AUTHORIZATION_STATUS, APP_ROUTE } from '../../constants';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/login/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

export const PrivateRouter = ({children}:PrivateRouteProps) => {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    authorizationStatus === AUTHORIZATION_STATUS.Auth
      ? children
      : <Navigate to={APP_ROUTE.Login} />
  );
};


