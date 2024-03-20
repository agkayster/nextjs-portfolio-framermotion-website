import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Portfolio website',
	description: 'Personal portfolio website',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='w-screen h-screen bg-red-500'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
