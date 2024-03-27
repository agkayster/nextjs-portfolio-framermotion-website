'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
	const [success, setSuccess] = useState(false);

	const [error, setError] = useState(false);

	const text = 'Say Hello';

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* TEXT CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl md:text-6xl'>
					<div>
						{text.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}>
								{letter}{' '}
							</motion.span>
						))}
						😁
					</div>
				</div>
				{/* FORM CONTAINER */}
				<form
					className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 p-2 mb-4 
				md:mb-0 md:gap-6 md:p-6 md:justify-center '>
					<span>Dear Ejike,</span>
					<textarea
						name=''
						id=''
						rows={12}
						className='bg-transparent border-b-2 border-b-black outline-none resize-none'
					/>
					<span>My email address is:</span>
					<input
						type='text'
						className='bg-transparent border-b-2 border-b-black outline-none'
					/>
					<span>Regards,</span>
					<button
						type='submit'
						className='bg-purple-200 rounded font-semibold text-gray-600 p-1 md:p-4'>
						Send
					</button>
					{success && (
						<span className='text-green-600 font-semibold text-center'>
							Message sent successfully!
						</span>
					)}
					{error && (
						<span className='text-red-600 font-semibold text-center'>
							Message not sent!
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
