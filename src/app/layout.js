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
        <div className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
