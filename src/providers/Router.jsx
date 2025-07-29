import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import Error from "../routes/Error";
import LandingPage from "../routes/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
