'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './navbar';

const TransitionProvider = ({ children }) => {
	const pathname = usePathname();

	return (
		// tells the 2nd motion.div animate to wait for the 1st motion.div animate
		<AnimatePresence mode='wait'>
			<div
				/* pass in pathname as key to track when we click on another page */
				key={pathname}
				className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
				{/* our first animation, comes from above and goes down */}
				<motion.div
					className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
				{/* covers the screen and goes down, z index of 30 means it is behind the 1st animation */}
				<motion.div
					className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.5 } }}
				/>
				<div className='h-24'>
					<Navbar />
				</div>
				{/* takes the remaining height after the navbar */}
				<div className='h-[calc(100vh-6rem)]'>{children}</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
