import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import {API_ROUTE} from '../constants';
import { Comment } from '../types/comment';

export const fetchFilmsAction = createAsyncThunk<
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

export const fetchFilmAction = createAsyncThunk<
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

export const fetchSimilarFilmsAction = createAsyncThunk<
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

export const fetchCommentsAction = createAsyncThunk<
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
