import { createBrowserRouter, Outlet } from "react-router";

import LandingLayout from "../layouts/LandingLayout";
import ProtectionProvider from "./ProtectionProvider";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../routes/Login";
import Error from "../routes/Error";
import LandingPage from "../routes/LandingPage";
import GeneralSettings from "../routes/GeneralSettings";

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
          {
            path: "general-settings",
            element: <GeneralSettings />,
          },
        ],
      },
    ],
  },
]);
