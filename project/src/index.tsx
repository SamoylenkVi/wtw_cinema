import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FilmDetailsPage } from './pages/FilmDetailsPage';
import { AddReviewPage } from './pages/AddReviewPage';
import { Player } from './components/Player';
import { Login } from './pages/Login';
import { films } from './mocks/films';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <MainPage films={films} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/films/:id',
    element: <FilmDetailsPage />,
  },
  {
    path: '/films/:id/review',
    element: <AddReviewPage />,
  },
  {
    path: '/player/:id',
    element: <Player />,
  },
]);

const root = document.getElementById('root');
if (root){
  ReactDOM.createRoot(root as HTMLDivElement).render(
    <RouterProvider router={router} />,
  );
}
