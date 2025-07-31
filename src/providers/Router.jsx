import { createBrowserRouter, Outlet } from "react-router";
import Error from "../routes/Error";
import LandingPage from "../routes/LandingPage";
import LandingLayout from "../layouts/LandingLayout";
import Login from "../routes/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectionProvider from "./ProtectionProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <LandingLayout />,
        children: [
          {
            index: true,
            element: <LandingPage />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectionProvider>
            <DashboardLayout />
          </ProtectionProvider>
        ),
        children: [
          {
            index: true,
            element: <>main page</>,
          },
        ],
      },
    ],
  },
]);
