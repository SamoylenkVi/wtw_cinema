import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import { redirectToRoute } from '../action';
import { State } from '../../types/state';

const fakeBack = jest.fn();

const fakeHistory = {
  back () {
    fakeBack();
  }
};

jest.mock('../../utils/browserHistory', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middlewares: redirect', () => {

  it('should be redirect', () => {
    store.dispatch(redirectToRoute());
    expect(fakeBack.mock.calls).toHaveLength(1);
  });
});
