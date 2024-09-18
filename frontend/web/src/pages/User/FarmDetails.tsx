import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Farm from './Farm';

interface FarmData {
	title: string;
	size: number;
	images: string[];
	state: string;
	location: {
		type: string;
		coordinates: number[];
	};
	waterSource: string;
	crops: string[];
}

export default function FarmDetails() {
	const [farms, setFarms] = useState<FarmData[]>([]);

	useEffect(() => {
		const fetchFarms = async () => {
			try {
				const userString = localStorage.getItem('user');
				if (!userString) {
					console.error('User not found in localStorage');
					return;
				}

				const user = JSON.parse(userString);
				const id = user._id;
				if (!id) {
					console.error('User ID not found');
					return;
				}

				const response = await fetch(`/api/farmer/getAllFarms/${id}`);
				const result = await response.json();
				if (result.success) {
					setFarms(result.data);
				} else {
					console.error(result.message);
				}
			} catch (error) {
				console.error('Error fetching farms:', error);
			}
		};

		fetchFarms();
	}, []);

	return (
		<div className='flex flex-col items-center'>
			<p className='text-4xl text-center'>Your Farms</p>
			<br />
			<div className='flex justify-center flex-grow'>
				<div className='grid grid-cols-2 gap-y-5 gap-x-24'>
					{farms.map((farm, index) => (
						<Farm
							key={index}
							farm={farm}
						/>
					))}
					<div className='col-span-2 flex justify-end'>
						<Button className='px-6 py-3 text-xl'>Add Farms</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
