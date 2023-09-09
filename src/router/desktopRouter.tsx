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
import TutorSignUp from "../pages/AuthPage/TutorSignUp";
import TutorSignIn from "../pages/AuthPage/TutorSignIn";
import SignInAs from "../pages/AuthPage/SignUpAs";
import LoginAS from "../pages/AuthPage/LoginAs";
import DetailPage from "../pages/ViewCourses/MyCourse";

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
        element: <DetailPage />,
      },
      {
        path: "/courses",
        element: <Courses />,
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
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/signupas",
    element: <SignInAs />,
  },
  {
    path: "/signinas",
    element: <LoginAS />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/tutor-sign-up",
    element: <TutorSignUp />,
  },
  {
    path: "/tutor-login",
    element: <TutorSignIn />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
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
]);
