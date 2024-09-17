import SideBar from './SideBar';
import FarmDetails from './FarmDetails';
import CarouselDemo from './CarouselDemo';
export default function Profile() {
	return (
		<div className='min-h-screen overflow-x-hidden m-10 mx-auto'>
			<SideBar />
			<CarouselDemo />
			<FarmDetails />
		</div>
	);
}
