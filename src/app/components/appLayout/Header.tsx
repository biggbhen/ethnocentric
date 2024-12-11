'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../ui/Button';

const Header = () => {
	const pathname = usePathname();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='bg-white text-black'>
				<div className='flex justify-between items-center px-5 py-4'>
					<div className='text-lg font-bold'>LOGO</div>

					{/* Desktop Navigation */}
					<div className='hidden sm:flex gap-x-7'>
						{['/', '/about', '/programs', '/Cluster', '/blog'].map(
							(route, idx) => (
								<div
									key={idx}
									className={`cursor-pointer font-medium ${
										pathname === route
											? 'text-[#E86025]'
											: 'hover:text-[#E86025]'
									}`}>
									<Link href={route}>
										{route === '/'
											? 'Home'
											: route
													.substring(1)
													.replace(/^\w/, (c) => c.toUpperCase())}
									</Link>
								</div>
							)
						)}
					</div>

					{/* Desktop Buttons */}
					<div className='hidden sm:flex gap-x-5'>
						<Button variant='secondary'>Support Our Mission</Button>
						<Button variant='primary'>Join the Program</Button>
					</div>

					{/* Hamburger Icon for Mobile */}
					<div
						className='sm:hidden cursor-pointer'
						onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
						<div className='space-y-1'>
							<span className='block h-1 w-6 bg-black'></span>
							<span className='block h-1 w-6 bg-black'></span>
							<span className='block h-1 w-6 bg-black'></span>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className='sm:hidden flex flex-col px-5 space-y-4'>
						{['/', '/about', '/programs', '/Cluster', '/blog'].map(
							(route, idx) => (
								<div
									key={idx}
									className={`cursor-pointer font-medium ${
										pathname === route
											? 'text-[#E86025]'
											: 'hover:text-[#E86025]'
									}`}>
									<Link href={route}>
										{route === '/'
											? 'Home'
											: route
													.substring(1)
													.replace(/^\w/, (c) => c.toUpperCase())}
									</Link>
								</div>
							)
						)}
						<div className='flex flex-col space-y-3'>
							<Button variant='secondary'>Support Our Mission</Button>
							<Button variant='primary'>Join the Program</Button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
