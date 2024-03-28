'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			{/*for image to show, main container must take full height*/}
			<main className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* IMAGE CONTAINER: using relative ensures the image does not overlap the navbar */}
				<div className='h-1/2 lg:h-full lg:w-1/2 relative'>
					{/* use fill to fill up the div size instead of using width and height */}
					<Image
						src='/hero.png'
						alt='face of a man'
						fill
						priority={false}
						className='object-contain'
					/>
				</div>
				{/* TEXT CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center mt-6'>
					{/* TITLE */}
					<h1 className='text-2xl md:text-5xl font-bold'>
						Crafting Digital Experience, Design Tomorrow
					</h1>
					{/* DESCRIPTION */}
					<p className='md:text-xl'>
						Welcome to my digital canvas, where innovation and
						creativity converge. With a keen eye for aesthetics and
						a mastery of code, my portfolio showcases a diverse
						collection of projects that reflect my commitment to
						excellence.
					</p>
					{/* BUTTONS */}
					<div className='lg:w-full flex gap-4 mb-8'>
						<Link href='/portfolio'>
							<button className='p-2 rounded-lg ring-1 ring-black bg-black text-white'>
								View My Work
							</button>
						</Link>
						<Link href='/contact'>
							<button className='p-2 rounded-lg ring-1 ring-black'>
								Contact Me
							</button>
						</Link>
					</div>
				</div>
			</main>
		</motion.div>
	);
}
