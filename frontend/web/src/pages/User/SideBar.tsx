import {
	DashboardIcon,
	HomeIcon,
	FileIcon,
	BellIcon,
	GearIcon,
	ExitIcon,
	RocketIcon,
	FileTextIcon,
	ChevronRightIcon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

export default function SideBar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className='fixed top-20 left-2 rounded-full'>
					<ChevronRightIcon className='h-10 w-10' />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className='text-2xl my-7 flex items-center bg-green-300 p-2 rounded'>
						<DashboardIcon className='inline-flex size-8 px-1' />
						Dashboard
					</SheetTitle>
				</SheetHeader>
				<div className='grid gap-4 py-4'>
					<div className='flex flex-col gap-3'>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<HomeIcon className='inline-flex size-7 px-1 mr-3' />
									Home
								</p>
							</div>
						</SheetClose>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<FileTextIcon className='inline-flex size-7 px-1 mr-3' />
									Farm Details
								</p>
							</div>
						</SheetClose>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<FileIcon className='inline-flex size-7 px-1 mr-3' />
									Contracts
								</p>
							</div>
						</SheetClose>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<RocketIcon className='inline-flex size-7 px-1 mr-3' />
									Payments
								</p>
							</div>
						</SheetClose>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<BellIcon className='inline-flex size-7 px-1 mr-3' />
									Messages
								</p>
							</div>
						</SheetClose>
						<SheetDescription className='mt-5'>Settings</SheetDescription>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<GearIcon className='inline-flex size-7 px-1 mr-3' />
									Profile Settings
								</p>
							</div>
						</SheetClose>
						<SheetClose asChild>
							<div className='leading-8 p-2 text-lg font-semibold hover:bg-green-200 rounded transition duration-500'>
								<p>
									<ExitIcon className='inline-flex size-7 px-1 mr-3' />
									Logout
								</p>
							</div>
						</SheetClose>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
