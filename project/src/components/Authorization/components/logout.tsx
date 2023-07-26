import { useAppDispatch } from '../../../hooks';
import { fetchLogoutAction} from '../../../store/api-action';
import '../style.scss';

export const Logout = () => {
  const dispatch = useAppDispatch();

  const handleSignOutButtonClick = (evt : React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(fetchLogoutAction());
  };

  return (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <button onClick={handleSignOutButtonClick} className="user-block__button user-block__button--logout">Sign out</button>

      </li>
    </>
  );
};
