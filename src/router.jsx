import { createBrowserRouter } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import PageSix from './pages/PageSix';
import PageSeven from './pages/PageSeven';
import PageEight from './pages/PageEight';
import PageNine from './pages/PageNine';
import PageTen from './pages/PageTen';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/who-made-the-rocket",
        element: <PageOne />
      },
      {
        path: "/first-successful-long-range-guided-missile",
        element: <PageTwo />
      },
      {
        path: "/birth-of-modern-rocketry",
        element: <PageThree />
      },
      {
        path: "/the-rocket-that-launched-a-race",
        element: <PageFour />
      },
      {
        path: "/impact-on-post-war-science",
        element: <PageFive />
      },
      {
        path: "/anatomy-of-the-worlds-first-long-range-guided-missile",
        element: <PageSix />
      },
      {
        path: "/the-payload-system",
        element: <PageSeven />
      },
      {
        path: "/the-guidance-system",
        element: <PageEight />
      },
      {
        path: "/the-propulsion-system",
        element: <PageNine />
      },
      {
        path: "/chemistry-in-combustion",
        element: <PageTen />
      }
    ]
  },
]);

export default router;
