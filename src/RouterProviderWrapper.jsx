import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function RouterProviderWrapper() {
  return <RouterProvider router={router} />;
}
