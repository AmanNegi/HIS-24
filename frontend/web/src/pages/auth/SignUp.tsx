import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export default function SignUp() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		state: '',
		city: '',
		street: '',
		zipCode: '',
		role: '',
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSelectChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<Card className='w-[60vw] mx-auto'>
			<CardHeader>
				<CardTitle className='text-2xl'>Create an account</CardTitle>
			</CardHeader>
			<CardContent>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center'>
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='name'>First Name</Label>
							<Input
								id='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Your name'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Your email'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='password'>Password</Label>
							<Input
								id='password'
								value={formData.password}
								onChange={handleChange}
								placeholder='Your password'
								type='password'
								autoComplete='off'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='confirmPassword'>Confirm Password</Label>
							<Input
								id='confirmPassword'
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder='Confirm your password'
								type='password'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='phone'>Phone</Label>
							<Input
								id='phone'
								value={formData.phone}
								onChange={handleChange}
								placeholder='Enter your phone number'
								type='tel'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='state'>State</Label>
							<Select
								onValueChange={(value) => handleSelectChange('state', value)}>
								<SelectTrigger>
									<SelectValue placeholder='State' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='Andhra Pradesh'>Andhra Pradesh</SelectItem>
									<SelectItem value='Bihar'>Bihar</SelectItem>
									<SelectItem value='Gujarat'>Gujarat</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='city'>City</Label>
							<Input
								id='city'
								value={formData.city}
								onChange={handleChange}
								placeholder='Enter your city'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='street'>Street</Label>
							<Input
								id='street'
								value={formData.street}
								onChange={handleChange}
								placeholder='Enter your street address'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='zipCode'>Zip Code</Label>
							<Input
								id='zipCode'
								value={formData.zipCode}
								onChange={handleChange}
								placeholder='Enter your zip code'
							/>
						</div>

						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='role'>Role</Label>
							<Select
								onValueChange={(value) => handleSelectChange('role', value)}>
								<SelectTrigger>
									<SelectValue placeholder='Role' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='Farmer'>Farmer</SelectItem>
									<SelectItem value='Contractor'>Contractor</SelectItem>
									<SelectItem value='Admin'>Admin</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<CardFooter className='flex justify-center w-full my-2'>
						<Button type='submit'>Submit</Button>
					</CardFooter>
				</form>
			</CardContent>
		</Card>
	);
}
