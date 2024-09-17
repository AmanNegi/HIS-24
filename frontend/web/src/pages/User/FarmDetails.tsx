import { Button } from '@/components/ui/button';
import { Farm } from './Farm';
export default function FarmDetails() {
	return (
		<div className='flex flex-col items-center'>
			<p className='text-4xl'>Your Farms</p>
			<br />
			<div className='flex justify-center flex-grow'>
				<div className='grid grid-cols-2 gap-y-5 gap-x-24'>
					<Farm />
					<Farm />
					<Farm />
					<Farm />
					<Farm />
					<Farm />
					<div className='col-span-2 flex justify-end'>
						<Button className='px-6 py-3 text-xl'>Add Farms</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
