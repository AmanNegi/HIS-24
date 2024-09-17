import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function Farm() {
	return (
		<Card className='w-[35rem] h-[15rem] rounded-2xl overflow-hidden'>
			<div className='grid grid-cols-12 h-full'>
				<CardContent className='col-span-4  h-full p-0 overflow-hidden'>
					<img
						src='https://media.istockphoto.com/id/503646746/photo/farmer-spreading-fertilizer-in-the-field-wheat.jpg?s=1024x1024&w=is&k=20&c=Bjwq9nZjictwC1A2HpHFCas-cCXtDu8nbWXw81SYnfI='
						alt='farm'
						className='h-full w-full'
					/>
				</CardContent>
				<CardContent className='col-span-8 h-full p-4 flex flex-col items-start justify-evenly'>
					<p className='text-3xl'>Khet 1</p>
					<p>size</p>
					<div className='flex flex-wrap gap-2'>
						<Badge className='bg-green-300 text-center text-md text-black leading-7 font-normal pointer-events-none inline-block'>
							Sugarcane
						</Badge>
						<Badge className='bg-green-300 text-center text-md text-black leading-7 font-normal pointer-events-none inline-block'>
							Rice
						</Badge>
						<Badge className='bg-green-300 text-center text-md text-black leading-7 font-normal pointer-events-none inline-block'>
							Wheat
						</Badge>
						<Badge className='bg-green-300 text-center text-md text-black leading-7 font-normal pointer-events-none inline-block'>
							Bottle Gourd
						</Badge>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}
