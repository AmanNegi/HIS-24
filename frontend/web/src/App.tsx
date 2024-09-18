import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

export default function App() {
	return (
		<>
			<RouterProvider router={router} />;
			<ToastContainer
				theme='dark'
				autoClose={1500}
			/>
		</>
	);
}
