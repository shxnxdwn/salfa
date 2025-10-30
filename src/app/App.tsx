import './style/index.css';
import { router } from './providers/router';
import { RouterProvider } from 'react-router-dom';

export const App = () => {
  return <RouterProvider router={router} />;
};
