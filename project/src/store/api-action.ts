import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { LoginData } from '../types/login';
import { UserData } from '../types/user-data';
import { API_ROUTE, AUTHORIZATION_STATUS } from '../constants';
import { Comment } from '../types/comment';
import {dropToken, saveToken} from '../services/token';
import {redirectToRoute, requireAuthorization} from './action';
import { NewCommentData } from '../types/new-comment';


export const fetchFilms = createAsyncThunk<
  Film[],
  void,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (params, { extra: api }) => {
    const { data } = await api.get<Film[]>(API_ROUTE.Films);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<
  Film,
  string,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<Film>(`${API_ROUTE.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<
  Film[],
  string,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${API_ROUTE.Films}/${id}/similar`);
    return data;
  },
);

export const fetchComments = createAsyncThunk<
  Comment[],
  number,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${API_ROUTE.Comments}/${id}`);
    return data;
  },
);

export const fetchLogin = createAsyncThunk<
  void,
  LoginData,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchLogin',
  async ({ email, password }, {dispatch, extra: api }) => {
    const {data: {token}} = await api.post<UserData>(API_ROUTE.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute());
    dispatch(requireAuthorization(AUTHORIZATION_STATUS.Auth));
  },
);


export const fetchLogout = createAsyncThunk<
  void,
  void,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchLogout',
  async (params, { dispatch, extra: api }) => {
    await api.delete(API_ROUTE.Logout);
    dropToken();
    dispatch(requireAuthorization(AUTHORIZATION_STATUS.NoAuth));
  },
);

export const fetchAddNewComment = createAsyncThunk<
  void,
  NewCommentData,
 {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNewComment',
  async ({ comment, rating, id }, {dispatch, extra: api }) => {
    await api.post(`${API_ROUTE.Comments}/${id}`, {comment, rating});
    dispatch(redirectToRoute());
  },
);
