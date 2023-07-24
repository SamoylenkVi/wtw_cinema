import { Link } from 'react-router-dom';
import { APP_ROUTE } from '../../../constants';

export const Login = () => (
  <li className="user-block__item">
    <Link to={APP_ROUTE.Login} className="user-block__link">Sign in</Link>
  </li>
);
