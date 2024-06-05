import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
