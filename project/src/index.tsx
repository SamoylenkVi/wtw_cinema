import {Provider} from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/store';
import { MainPage } from './pages/MainPage';
import { MyListPage } from './pages/MyListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FilmDetailsPage } from './pages/FilmDetailsPage';
import { AddReviewPage } from './pages/AddReviewPage';
import { Player } from './components/Player';
import { Login } from './pages/Login';
import { PrivateRouter } from './components/PrivateRoute';
import { APP_ROUTE } from './constants';
import { useAuthCheck, useScrollToTop} from './hooks';

const ScrollToTopLayout = () => {
  useScrollToTop();
  useAuthCheck();
  return ( <Outlet />);
};


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
        element: <MainPage />,
      },
      {
        path: APP_ROUTE.MyList,
        element: <MyListPage />,
      },
      {
        path: APP_ROUTE.Login,
        element: <Login />,
      },
      {
        path: APP_ROUTE.Film,
        element:
        <PrivateRouter>
          <FilmDetailsPage />
        </PrivateRouter>,
      },
      {
        path: APP_ROUTE.Review,
        element:
        <PrivateRouter>
          <AddReviewPage />
        </PrivateRouter>,
      },
      {
        path: APP_ROUTE.Player,
        element:
        <PrivateRouter>
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
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  );
}
