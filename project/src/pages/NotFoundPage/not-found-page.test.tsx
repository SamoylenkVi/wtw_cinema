import {render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import {MemoryRouter} from 'react-router-dom';
import { NotFoundPage } from '.';

describe('Component: Not found page', () => {

  it('should render correctly', () => {
    render (
      <MemoryRouter>
        <HelmetProvider >
          <NotFoundPage></NotFoundPage>
        </HelmetProvider>
      </MemoryRouter>

    );

    const headerElement = screen.getByText('404 Not Found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

});

