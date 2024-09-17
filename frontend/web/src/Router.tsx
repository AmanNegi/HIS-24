import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          path: "",
          element: <LandingPage />,
        },

        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "home", element: <LandingPage /> },
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
