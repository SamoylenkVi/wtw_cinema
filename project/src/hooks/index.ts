import {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {AUTHORIZATION_STATUS} from '../constants';
import {getToken} from '../services/token';
import { requireAuthorization } from '../store/login/login';
import type {State, AppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
};

export const useAuthCheck = () => {
  const token = getToken();
  const dispatch = useAppDispatch();

  if(token){
    dispatch(requireAuthorization(AUTHORIZATION_STATUS.Auth));
  }
};
