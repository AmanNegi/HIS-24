import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FarmProps {
	farm: {
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
	};
}

export default function Farm({ farm }: FarmProps) {
	return (
		<Card className='w-[35rem] h-[15rem] rounded-2xl overflow-hidden'>
			<div className='grid grid-cols-12'>
				<CardContent className='col-span-4  h-full p-0 overflow-hidden'>
					<img
						src={farm.images[0]}
						alt={farm.title}
						className='w-full object-contain'
					/>
				</CardContent>
				<CardContent className='col-span-8 h-full p-4 flex flex-col items-start justify-evenly'>
					<p className='text-3xl'>{farm.title}</p>
					<p>Size: {farm.size} acres</p>
					<p>State: {farm.state}</p>
					<p>Water Source: {farm.waterSource}</p>
					<div className='flex flex-wrap gap-2'>
						{farm.crops.map((crop, cropIndex) => (
							<Badge
								key={cropIndex}
								className='bg-green-300 text-center text-md text-black leading-7 font-normal pointer-events-none inline-block'>
								{crop}
							</Badge>
						))}
					</div>
				</CardContent>
			</div>
		</Card>
	);
}
