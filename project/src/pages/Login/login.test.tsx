import {render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Login } from '.';
import {Provider} from 'react-redux';
import {State} from '../../types/state';
import { initialState } from '../../store/login/login';


describe('Component: Login page', () => {


  it('should render correctly', async () => {
    const mockStore = configureMockStore<State>()({
      USER: initialState,
    });

    render (
      <Provider store={mockStore}>
        <MemoryRouter >
          <HelmetProvider>
            <Login/>
          </HelmetProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByTestId('submit-form')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'user1');
    await userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue('user1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123456')).toBeInTheDocument();
  });

});
