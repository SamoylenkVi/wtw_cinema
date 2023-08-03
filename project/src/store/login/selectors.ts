import { State } from '../../types/state';

export const selectAuthorizationStatus = (state:State) => state.USER.authorizationStatus;
export const selectIsLoginSubmit = (state:State) => state.USER.isLoginSubmit;
