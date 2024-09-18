import React, { useEffect, useState } from 'react';
import { PiFarmBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import logo from '../../assets/logo_app 1.png';

export default function NavBar() {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
		setIsLoggedIn(loggedIn);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('user');
		setIsLoggedIn(false);
		navigate('/login');
	};

	return (
		<div className='bg-white text-white fixed top-0 z-[2] h-[8vh] w-[100%] bg-white-700 flex px-2 md lg:px-10 items-center shadow-md'>
			<div className=''>
				<img
					src={logo}
					alt='logo'
					width={60}
				/>
			</div>
			<div className='flex-1'></div>
			<div className='flex gap-5'>
				<Button
					className='flex-1 flex-end'
					onClick={() => navigate('/')}>
					Home
				</Button>
				<Button
					className='w-40 flex-1 flex-end'
					onClick={() => navigate('/contact')}>
					Contact Us
				</Button>
			</div>
			<div className='ml-20 flex justify-end border-white'>
				{isLoggedIn ? (
					<button
						onClick={handleLogout}
						className='text-black'>
						Logout
					</button>
				) : (
					<button
						onClick={() => navigate('/signup')}
						className='text-black'>
						Sign In
					</button>
				)}
			</div>
		</div>
	);
}
