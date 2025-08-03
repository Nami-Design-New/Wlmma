import { createBrowserRouter, Outlet } from "react-router";

import LandingLayout from "../layouts/LandingLayout";
import ProtectionProvider from "./ProtectionProvider";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../routes/Login";
import Error from "../routes/Error";
import AppSliders from "./../routes/AppSliders";
import LandingPage from "../routes/LandingPage";

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
            path: "app-sliders",
            element: <AppSliders />,
          },
        ],
      },
    ],
  },
]);
