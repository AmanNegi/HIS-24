import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { BiHide, BiShow } from 'react-icons/bi';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import ButtonLoader from '@/components/ButtonLoader';

const PasswordField = ({
	handleFieldChange,
}: {
	handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<div className='flex flex-col w-[100%]'>
			<div className='flex items-end'>
				<Input
					placeholder='Password'
					type={passwordVisible ? 'text' : 'password'}
					onChange={handleFieldChange}
				/>
				<button
					type='button'
					className='bg-black p-3 rounded-sm text-white ml-3'
					onClick={togglePasswordVisibility}>
					{passwordVisible ? <BiHide /> : <BiShow />}
				</button>
			</div>
		</div>
	);
};

export default function LoginForm() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault(); // Prevents the form from reloading the page

		if (!phone) {
			toast.error('Enter your phone to login 😥');
			return;
		}

		if (!password) {
			toast.error('Enter your password to login 😥');
			return;
		}

		setLoading(true);

		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ phone, password }),
				credentials: 'include', // Include credentials in the request
			});

			const data = await response.json();

			if (response.status === 200) {
				// Save user data to localStorage
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('user', JSON.stringify(data.user));
				navigate('/home');
			} else {
				console.log(data);
				toast.error(data.message || 'Error while logging in');
			}
		} catch (error) {
			toast.error('Error while logging in');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card className='md:w-[50vw] lg:w-[40vw] m-auto'>
			<CardHeader>
				<CardTitle className='text-3xl my-4'>Welcome Back</CardTitle>
				<CardDescription>Log in to your account</CardDescription>
				<hr />
			</CardHeader>
			<CardContent>
				<form
					onSubmit={handleLogin}
					className='flex flex-col items-center'>
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col space-y-1.5'>
							<Input
								id='phone'
								type='phone'
								onChange={(e) => setPhone(e.target.value.toLowerCase())}
								autoComplete='off'
								placeholder='Phone Number'
							/>
						</div>

						<PasswordField
							handleFieldChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<CardFooter className='flex justify-center w-full mt-8'>
						<Button
							type='submit'
							disabled={loading}
							className={`${loading ? 'cursor-not-allowed' : ''}`}>
							{loading ? <ButtonLoader /> : 'Login'}
						</Button>
					</CardFooter>
				</form>
			</CardContent>
		</Card>
	);
}
