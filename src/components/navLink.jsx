'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ url, title }) => {
	const pathname = usePathname();

	return (
		<Link
			className={`rounded p-1 ${
				pathname === url && 'bg-black text-white'
			}`}
			href={url}>
			{title}
		</Link>
	);
};

export default NavLink;
