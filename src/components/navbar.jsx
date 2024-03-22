'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './navLink';
import { motion } from 'framer-motion';

const links = [
	{ url: '/', title: 'Home' },
	{ url: '/about', title: 'About' },
	{ url: '/contact', title: 'Contact' },
	{ url: '/portfolio', title: 'Portfolio' },
];

const icons = [
	{ id: 1, src: '/github.png', alt: 'github imgae' },
	{ id: 2, src: '/dribbble.png', alt: 'dribble imgae' },
	{ id: 3, src: '/facebook.png', alt: 'facebook imgae' },
	{ id: 4, src: '/linkedin.png', alt: 'linkedin imgae' },
	{ id: 5, src: '/pinterest.png', alt: 'pinterest imgae' },
	{ id: 6, src: '/instagram.png', alt: 'instagram imgae' },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: 'rgb(255, 255, 255)',
		},
	};

	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: 'rgb(255, 255, 255)',
		},
	};

	const listVariants = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	const handleOpenNavBurger = () => setOpen(!open);

	return (
		/* 1st Step: px-4 is for small screen, sm:px-8 means after small screen, md:px-12 is for medium screen, 
    lg:px-20 is for large screen, xl:px-48 is for biggest screen. The responsiveness should come in this order */
		<div
			className='h-full flex flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 
    text-xl'>
			{/* LINKS */}
			<div className='hidden md:flex flex-row gap-4 w-1/3'>
				{links.map(({ url, title }) => (
					<NavLink key={title} url={url} title={title} />
				))}
			</div>
			{/*2nd step: LOGO */}
			<div className='md:hidden lg:flex items-center xl:justify-center xl:w-1/3'>
				<Link
					href='/'
					className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
					<span className='text-white mr-1'>ejike</span>
					<span className='bg-white text-black w-12 h-8 rounded flex items-center justify-center'>
						.dev
					</span>
				</Link>
			</div>
			{/* 6th Step: SOCIAL */}
			<div className='w-1/3'>
				<Link href='/' className='hidden md:flex flex-row gap-4'>
					{icons.map(({ id, src, alt }) => (
						<Image
							src={src}
							alt={alt}
							width={24}
							height={24}
							key={id}
						/>
					))}
				</Link>
			</div>
			{/* 3rd step: RESPONSIVE MENU/MOBILE */}
			<div className='md:hidden'>
				{/* 4th Step: MENU BUTTON FOR MOBILE */}
				<button
					className='w-10 h-8 flex flex-col justify-between z-50 relative'
					onClick={handleOpenNavBurger}>
					<motion.div
						variants={topVariants}
						animate={open ? 'opened' : 'closed'}
						className='w-10 h-1 bg-black rounded origin-left'></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? 'opened' : 'closed'}
						className='w-10 h-1 bg-black rounded'></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? 'opened' : 'closed'}
						className='w-10 h-1 bg-black rounded origin-left'></motion.div>
				</button>
				{/* 5th Step: MENU LIST handles what shows when we click on the MENU BUTTON */}
				{open && (
					<motion.div
						variants={listVariants}
						initial='closed'
						animate='opened'
						className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
						{links.map(({ url, title }) => (
							<Link href={url} key={title}>
								{title}
							</Link>

							// <motion.div variants={listItemVariants} key={title}>
							// 	<Link href={url}>{title}</Link>
							// </motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
