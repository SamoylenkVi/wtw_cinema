import {AUTHORIZATION_STATUS} from '../../constants';
import { initialState, login, requireAuthorization, fetchLogin } from './login';
describe('Reducer: authorization', () => {

  let state = initialState;

  beforeEach(() => {
    state = {
      ...initialState,
      authorizationStatus: AUTHORIZATION_STATUS.Unknown,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(login.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should update authorization status', () => {

    expect(login.reducer(state, {type: requireAuthorization, payload: AUTHORIZATION_STATUS.Auth}))
      .toEqual(
        {
          ...initialState,
          authorizationStatus: AUTHORIZATION_STATUS.Auth,
        }
      );
  });

  it('should update login submit status by pending fetchLogin', () => {

    expect(login.reducer(state, {type: fetchLogin.pending.type}))
      .toEqual(
        {
          ...initialState,
          isLoginSubmit: true,
        }
      );
  });

  it('should update login submit status by pending fulfilled', () => {

    expect(login.reducer(state, {type: fetchLogin.fulfilled.type}))
      .toEqual(
        {
          ...initialState,
          isLoginSubmit: false,
        }
      );
  });

  it('should update login submit status by pending rejected', () => {

    expect(login.reducer(state, {type: fetchLogin.rejected.type}))
      .toEqual(
        {
          ...initialState,
          isLoginSubmit: false,
        }
      );
  });
});
