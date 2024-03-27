'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projectList = [
	{
		id: 1,
		color: 'from-red-300 to-blue-300',
		title: 'React Commerce',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		link: 'https://lama.dev',
	},
	{
		id: 2,
		color: 'from-blue-300 to-violet-300',
		title: 'Next.js Medium Blog',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		link: 'https://lama.dev',
	},
	{
		id: 3,
		color: 'from-violet-300 to-purple-300',
		title: 'Vanilla Book App',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		link: 'https://lama.dev',
	},
	{
		id: 4,
		color: 'from-purple-300 to-red-300',
		title: 'Spotify Music App',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
		img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		link: 'https://lama.dev',
	},
];

const PortfolioPage = () => {
	const portfolioRef = useRef();

	const { scrollYProgress } = useScroll({ target: portfolioRef });

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className='h-[600vh] relative' ref={portfolioRef}>
				<div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
					My Works
				</div>
				<div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
					<div className='flex'>
						{projectList &&
							projectList.map(
								({ id, color, title, desc, img, link }) => (
									<div
										key={id}
										className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`}>
										<div className='flex flex-col gap-8 text-white'>
											<h1>{title}</h1>
											<div className='relative'>
												<Image
													src={img}
													alt='images'
													fill
													className='absolute'
												/>
											</div>
											<p>{desc}</p>
											<Link href={link}>
												<button>See Demo</button>
											</Link>
										</div>
									</div>
								)
							)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
