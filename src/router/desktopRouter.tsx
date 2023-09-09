import { createBrowserRouter } from "react-router-dom";
import DesktopLayout from "../components/Layout/DesktopLayoutLandingPage/DesktopLayout";
import LandingPage from "../pages/LandingPage/LandingPage";
import MyCourse from "../pages/ViewCourses/MyCourse";
import Courses from "../pages/Courses/Courses";
import SignUp from "../pages/AuthPage/SignUp";
import Login from "../pages/AuthPage/Login";
import Leaderboard from "../pages/LeaderBoard/Leaderboard";
import Game from "../pages/Game/Game";
import UploadPage from "../pages/AdminUpload/UploadPage";
import Quiz from "../pages/Game/Quiz";
import Quiz2 from "../pages/Game/Quiz2";
import Quiz3 from "../pages/Game/Quiz3";

export const desktopRouter = createBrowserRouter([
  {
    path: "/",
    element: <DesktopLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/view-courses",
        element: <MyCourse />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/game",
        element: <Game />,
        children: [
          {
            index: true,
            element: <Quiz />,
          },
          {
            path: "/game/next1",
            element: <Quiz2 />,
          },
          {
            path: "/game/next2",
            element: <Quiz3 />,
          },
        ],
      },
    ],
  },
  {
    path: "/upload",
    element: <UploadPage />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);
