import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import {API_ROUTE,} from '../constants';

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
