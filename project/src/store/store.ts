import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../services/api';
import { redirectM } from './middlewares/redirect';

const api = createApi();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectM),
});
