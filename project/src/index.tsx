import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FilmDetailsPage } from './pages/FilmDetailsPage';
import { AddReviewPage } from './pages/AddReviewPage';
import { Player } from './components/Player';
import { Login } from './pages/Login';
import { films } from './mocks/films';
import { APP_ROUTE } from './constants';

const router = createBrowserRouter([
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
    element: <FilmDetailsPage />,
  },
  {
    path: APP_ROUTE.Review,
    element: <AddReviewPage />,
  },
  {
    path: APP_ROUTE.Player,
    element: <Player />,
  },
]);

const root = document.getElementById('root');
if (root){
  ReactDOM.createRoot(root as HTMLDivElement).render(
    <RouterProvider router={router} />,
  );
}
