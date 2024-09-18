import { motion } from 'framer-motion';
import NavBar from '../../components/NavBar/NavBar';
import exploreImage from '../../assets/bg-1.jpg';
import { Button } from '@/components/ui/button';
import { data, features } from '../../data/data';
import Footer from '@/components/Footer';
import Working from './components/Working';
import Stories from './components/Stories';
import CallToAction from './components/CallToAction';

export default function LandingPage() {
	return (
		<>
			<main className='mt-[2.5rem] w-[100%] overflow-hidden snap snap-y snap-mandatory'>
				<NavBar />
				<TopSection />
				<Working />
				<OurMottoSection />
				<section className='mx-8 px-4 '>
					<div className='flex flex-col md:flex-row'>
						<motion.div
							initial={{ x: -300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.35, duration: 1 }}
							viewport={{ once: true }}
							className='w-[100%] p-5 md:w-[30%] my-5 flex flex-col justify-center items-center bg-green-400 hover:bg-green-500 rounded-lg'>
							<h1 className='text-4xl font-bold'>Our Features</h1>
						</motion.div>
						<div className='w-[100%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 md:m-5'>
							{features.map((e, i) => {
								return (
									<motion.div
										key={i}
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.05 }}>
										<motion.div
											transition={{ delay: 0.25, duration: 1 }}
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											viewport={{ once: true }}
											key={i}
											className='group p-8 bg-green-400 hover:bg-green-500 h-[100%] w-[100%] flex flex-col justify-evenly rounded-lg'>
											<div className='bg-gray-800 mb-6 rounded-full h-[75px] w-[75px] flex justify-center items-center text-white text-2xl'>
												{e.icon}
											</div>

											<h1 className='text-2xl font-bold'>{e.title}</h1>
											<p className='text-black text-opacity-50'>
												{e.description}
											</p>
										</motion.div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>
				<Stories />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
}

function TopSection() {
	return (
		<section
			className='relative h-[92vh] w-[100%] bg-slate-200 bg-cover bg-right bg-fixed mt-10'
			style={{ backgroundImage: `url(${exploreImage})` }}>
			<div className='absolute inset-0 bg-gradient-to-b from-[#00000065] to-[#000000ac]'></div>

			<div className='absolute top-[15vh] md:top-[25vh] left-2 md:left-5 bg-opacity-50 p-10'>
				<motion.h1
					initial={{ x: -250, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className='font-bold tracking-wide spacing text-7xl text-white'>
					Unified Platform
					<br />
					for Contract Farming
				</motion.h1>
				<motion.h3
					initial={{ x: -250, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.25 }}
					className='text-2xl text-white mt-5'>
					"Your Harvest, Our Commitment”
				</motion.h3>

				<motion.div
					initial={{ x: -250, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='flex gap-4 mt-5'>
					<Button variant={'destructive'}>Learn More</Button>
					<Button variant={'destructive'}>Register Now</Button>
				</motion.div>
			</div>
		</section>
	);
}

function OurMottoSection() {
	return (
		<motion.section
			transition={{ duration: 1.25 }}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className=''>
			<div className='my-2 md:my-10 mx-2 md:mx-5 p-2 md:p-10 border-dotted border-[2px] border-slate-200'>
				<h1 className='pt-4 text-4xl font-bold text-center'>Our Motto</h1>
				<div className='flex flex-col md:flex-row lg:flex-row p-3 md:p-8 gap-2 md:gap-10 lg:gap-10'>
					{data.map((e) => {
						return (
							<motion.div
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.1 }}
								key={e.name}
								className='group flex flex-row flex-1 border-[2px] border-slate-200 p-[8px] rounded-lg text-center mb-1 hover:bg-green-500 hover:text-white hover:border-white hover:border-opacity-20'>
								<div className='flex flex-1 border-dashed justify-center items-center border-[2px] border-slate-200 px-3 py-2 rounded-lg hover:border-white hover:border-opacity-30'>
									<div className='text-3xl pr-2 hover:bg-green-400 group-hover:text-white'>
										{e.icon}
									</div>

									<p className='text-lg'>{e.name}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
