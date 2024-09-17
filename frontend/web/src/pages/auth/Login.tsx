import SignUpImage from '../../assets/farmImg.jpg';
import LoginForm from './LoginForm';
export default function SignUp() {
	return (
		<div className='bg-white h-[100vh] w-[100vw] flex flex-auto align-center'>
			<div className='flex-1 p-2 my-auto'>
				<LoginForm />
			</div>
			<div className='flex-1 m-5 rounded-3xl overflow-hidden'>
				<img
					src={SignUpImage}
					className='object-cover h-full w-full'
					alt=''
				/>
			</div>
		</div>
	);
}
