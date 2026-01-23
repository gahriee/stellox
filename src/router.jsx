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
import PageEleven from './pages/PageEleven';
import PageTwelve from './pages/PageTwelve';
import PageThirteen from './pages/PageThirteen';
import PageFifteen from './pages/PageFifteen';
import PageSixteen from './pages/PageSixteen';
import PageSeventeen from './pages/PageSeventeen';
import PageEighteen from './pages/PageEighteen';
import PageNineteen from './pages/PageNineteen';
import NotYetReady from './pages/NotYetReady';
import PageTwenty from './pages/PageTwenty';
import PageFourteen from './pages/PageFourteen';
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
      },
      {
        path: "/where-momentum-takes-off",
        element: <PageEleven />
      },
      {
        path: "/structural-system",
        element: <PageTwelve />
      },
      {
        path: "/blast-from-the-hague",
        element: <PageThirteen />
      },
      {
        path: "/the-first-strike-of-a-new-era-in-warfare",
        element: <PageFourteen />
      },
      {
        path: "/gravity-and-rocket-flight",
        element: <PageFifteen />
      },
      {
        path: "/stages-of-a-rocket-launch",
        element: <PageSixteen />
      },
      {
        path: "/how-do-rockets-achieve-orbit",
        element: <PageSeventeen />
      },
      {
        path: "/rocket-facts",
        element: <PageEighteen />
      },
      {
        path: "/quiz-1",
        element: <PageNineteen />
      },
      {
        path: "/quiz-2",
        element: <PageTwenty />
      },
      {
        path: "/not-yet-ready",
        element: <NotYetReady />
      }
    ]
  },
]);

export default router;
