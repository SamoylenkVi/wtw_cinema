import {Provider} from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FilmDetailsPage } from './pages/FilmDetailsPage';
import { AddReviewPage } from './pages/AddReviewPage';
import { Player } from './components/Player';
import { Login } from './pages/Login';
import { PrivateRouter } from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import { films } from './mocks/films';
import { APP_ROUTE, AUTHORIZATION_STATUS } from './constants';

const ScrollToTopLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <ScrollToTopLayout />,
    children: [
      {
        path: APP_ROUTE.NotFound,
        element: <NotFoundPage />,
      },
      {
        path: APP_ROUTE.Root,
        element: <MainPage films={films} />,
      },
      {
        path: APP_ROUTE.Login,
        element: <Login />,
      },
      {
        path: APP_ROUTE.Film,
        element:
        <PrivateRouter authorizationStatus= {AUTHORIZATION_STATUS.Auth}>
          <FilmDetailsPage />
        </PrivateRouter>,
      },
      {
        path: APP_ROUTE.Review,
        element: <AddReviewPage />,
      },
      {
        path: APP_ROUTE.Player,
        element:
        <PrivateRouter authorizationStatus= {AUTHORIZATION_STATUS.NoAuth}>
          <Player/>
        </PrivateRouter>,
      },
    ]
  }
]);

const root = document.getElementById('root');
if (root){
  ReactDOM.createRoot(root as HTMLDivElement).render(
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />,
      </Provider>
    </HelmetProvider>
  );
}
