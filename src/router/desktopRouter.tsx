import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import DesktopLayout from "../components/Layout/DesktopLayoutLandingPage/DesktopLayout";

const LandingPage = lazy(
  () => import("../pages/Desktop/LandingPage/LandingPage")
);
// const SignUp = lazy(() => import("../pages/Desktop/AuthPages/SignUp"));
// const Login = lazy(() => import("../pages/Desktop/AuthPages/Login"));

export const desktopRouter = createBrowserRouter([
  {
    path: "/",
    element: <DesktopLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/otp_vertification",
    element: <OTP />,
  },
  {
    path: "/forget_password",
    element: <UserForgetPassword />,
  },
  {
    path: "/userdashboard",
    element: <UserDashBoardLayout />,
    children: [
      {
        index: true,
        element: <UserBodyDashboard />,
      },
      {
        path: "/userdashboard/main-investment",
        element: <MainPage />,
      },
      {
        path: "/userdashboard/invest-now",
        element: <InvestNow />,
      },
      {
        path: "/userdashboard/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/userdashboard/investsuccess",
        element: <InvestSucces />,
      },
      {
        path: "/userdashboard/business-registration",
        element: <MainBusinessRegistrationPage />,
      },
      {
        path: "/userdashboard/settings",
        element: <MainSettings />,
      },
      {
        path: "/userdashboard/business-registration-progress",
        element: <BusinessRegistrationProgess />,
      },
      {
        path: "/userdashboard/bills-payment",
        element: <BillPayment />,
      },
      {
        path: "/userdashboard/bills-payment/airtime",
        element: <Airtime />,
      },
      {
        path: "/userdashboard/bills-payment/airtime-confirmation",
        element: (
          <div>
            <AirtimeConfirmPage />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        ),
      },
      {
        path: "/userdashboard/bills-payment/airtime-successful",
        element: <AirtimeSuccess />,
      },
      {
        path: "/userdashboard/bills-payment/buy-data",
        element: <BuyData />,
      },
      {
        path: "/userdashboard/bills-payment/buy-confirmation",
        element: <BuyDataConfirm />,
      },
      {
        path: "/userdashboard/bills-payment/buydata-successful",
        element: <BuyDataSuccess />,
      },
      {
        path: "/userdashboard/bills-payment/cable-subscriptions",
        element: <CableSub />,
      },
      {
        path: "/userdashboard/bills-payment/cable-select",
        element: <SelectCable />,
      },
      {
        path: "/userdashboard/bills-payment/cable-confirmation",
        element: <CableConfirmPage />,
      },
      {
        path: "/userdashboard/bills-payment/cable-success",
        element: <BuyCableSuccess />,
      },
      {
        path: "/userdashboard/bills-payment/electricity",
        element: <Electricity />,
      },
      {
        path: "/userdashboard/bills-payment/electricity-select",
        element: <SelectElectricity />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);
