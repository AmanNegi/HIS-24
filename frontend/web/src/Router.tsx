import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/User/Profile';
import AdminPage from './pages/AdminPage/AdminPage';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			children: [
				{
					path: '',
					element: <LandingPage />,
				},
				{ path: 'login', element: <Login /> },
				{ path: 'signup', element: <Signup /> },
				{ path: 'home', element: <LandingPage /> },
				{ path: 'profile', element: <Profile /> },
				{ path: 'admin', element: <AdminPage /> },
			],
		},
	],
	{
		basename: global.basename,
	}
);
