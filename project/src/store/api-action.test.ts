import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { State } from '../types/state';
import { createApi } from '../services/api';
import {Action} from 'redux';
import {LoginData} from '../types/login';
import {API_ROUTE} from '../constants';
import {fetchFilms, fetchLogin, fetchLogout} from './api-action';
import {redirectToRoute} from './action';
import {requireAuthorization} from './login/login';
import {makeFakeFilms} from '../utils/mocks';

describe('Async actions', () => {
  const api = createApi();
  const mockApi = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('Should dispatch requireAuthorization and redirectToRoute when Post / login', async () => {
    const store = mockStore();
    const fakeUser:LoginData = {
      email: 'fake',
      password: 'fake1234',
    };

    mockApi
      .onPost(API_ROUTE.Login)
      .reply(200, {token: 'secret'});

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(fetchLogin(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLogin.pending.type,
      redirectToRoute.type,
      requireAuthorization.type,
      fetchLogin.fulfilled.type,
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('user-films-token', 'secret');
  });

  it('Should dispatch requireAuthorization when Delete / logout', async () => {
    const store = mockStore();

    mockApi
      .onDelete(API_ROUTE.Logout)
      .reply(200);


    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(fetchLogout());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLogout.pending.type,
      requireAuthorization.type,
      fetchLogout.fulfilled.type,
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
  });

  it('Should return films when Get / Films', async () => {
    const store = mockStore();
    const films = makeFakeFilms();

    mockApi
      .onGet(API_ROUTE.Films)
      .reply(200, films);

    await store.dispatch(fetchFilms());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilms.pending.type,
      fetchFilms.fulfilled.type,
    ]);

  });
});


