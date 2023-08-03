import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatusType, AUTHORIZATION_STATUS, NAME_SPACE } from '../../constants';
import { LoginState } from '../../types/state';
import {fetchLogin} from '../api-action';

const initialState:LoginState = {
  isLoginSubmit:false,
  authorizationStatus: AUTHORIZATION_STATUS.Unknown,
};

export const login = createSlice({
  name: NAME_SPACE.Login,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<
       AuthorizationStatusType>) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers(builder){
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoginSubmit = true;
      })

      .addCase(fetchLogin.fulfilled, (state) => {
        state.isLoginSubmit = false;
      })

      .addCase(fetchLogin.rejected, (state) => {
        state.isLoginSubmit = false;
      });

  }
});


export const { requireAuthorization } = login.actions;
