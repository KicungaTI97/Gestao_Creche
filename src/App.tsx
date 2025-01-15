import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Header } from './pages/auth/Header';

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );

}

