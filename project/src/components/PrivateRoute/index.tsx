import { Navigate } from 'react-router';
import { AUTHORIZATION_STATUS, APP_ROUTE } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: 'AUTH' | 'NO_AUTH' | 'UNKNOWN';
  children: JSX.Element;
}

export const PrivateRouter = ({authorizationStatus, children}:PrivateRouteProps) => (
  authorizationStatus === AUTHORIZATION_STATUS.Auth
    ? children
    : <Navigate to={APP_ROUTE.Login} />
);
