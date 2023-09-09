import { createBrowserRouter } from "react-router-dom";
import DesktopLayout from "../components/Layout/DesktopLayoutLandingPage/DesktopLayout";
import LandingPage from "../pages/LandingPage/LandingPage";
import MyCourse from "../pages/ViewCourses/MyCourse";
import Courses from "../pages/Courses/Courses";

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
        path: "/auth",
        element: <MyCourse />,
      },
      {
        path: "/view-courses",
        element: <MyCourse />,
      },
    ],
  },
]);
