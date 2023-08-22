import {Link} from 'react-router-dom';
import {APP_ROUTE} from '../../../constants';
import { useAppDispatch } from '../../../hooks';
import { fetchLogout} from '../../../store/api-action';
import '../style.scss';

export const Logout = () => {
  const dispatch = useAppDispatch();

  const handleSignOutButtonClick = (evt : React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(fetchLogout());
  };

  return (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={APP_ROUTE.MyList}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <button onClick={handleSignOutButtonClick} className="user-block__button user-block__button--logout">Sign out</button>

      </li>
    </>
  );
};
