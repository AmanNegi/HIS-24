import { createBrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/User/Profile';
=======
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import Profile from "./pages/User/Profile";
>>>>>>> 201a2fb3d3f688acb81114eac2b87867dc00f33f

export const router = createBrowserRouter(
	[
		{
			path: '/',
			children: [
				{
					path: '',
					element: <LandingPage />,
				},

<<<<<<< HEAD
				{ path: 'login', element: <Login /> },
				{ path: 'signup', element: <Signup /> },
				{ path: 'home', element: <LandingPage /> },
				{ path: 'profile', element: <Profile /> },
			],
		},
	],
	{
		basename: global.basename,
	}
=======
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "home", element: <LandingPage /> },
        { path: "dashboard", element: <Profile /> },
      ],
    },
  ],
  {
    basename: global.basename,
  }
>>>>>>> 201a2fb3d3f688acb81114eac2b87867dc00f33f
);
