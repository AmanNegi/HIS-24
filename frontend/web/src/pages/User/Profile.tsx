import SideBar from './SideBar';
import FarmDetails from './FarmDetails';
import CarouselDemo from './CarouselDemo';
import NavBar from '@/components/NavBar/NavBar';
export default function Profile() {
	return (
		<div>
			<NavBar />
			<div className='min-h-screen overflow-x-hidden flex flex-col flex-grow items-center justify-center mt-10'>
				<SideBar />
				<CarouselDemo />
				<FarmDetails />
			</div>
		</div>
	);
}
