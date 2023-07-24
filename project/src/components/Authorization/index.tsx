
import { Logout } from './components/logout';
import { Login } from './components/login';
import {useAppSelector} from '../../hooks';
import { AUTHORIZATION_STATUS } from '../../constants';
import { selectAuthorizationStatus } from '../../selectors';


export const Authorization = () => {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    <ul className="user-block">
      {authorizationStatus === AUTHORIZATION_STATUS.Auth ? <Logout /> : <Login />}
    </ul>
  );

};
