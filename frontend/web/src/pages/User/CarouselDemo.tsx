import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export default function CarouselDemo() {
	return (
		<Carousel className='w-[75vw] mb-10 rounded-xl overflow-hidden'>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className='p-1'>
							<Card>
								<CardContent
									className='flex items-center justify-center p-0 rounded-xl overflow-hidden'
									style={{ width: 'full', height: 'full' }}>
									<img
										src='https://www.mygov.in/sites/all/themes/mygov/images/pmfby/pmfby-banner.jpg'
										alt='Kisan bima yojna'
										className='w-full h-full object-cover'
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
