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
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
    ],
  },
]);
