'use client';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';
import Logo from '@/assets/Logo.png'


const Header = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='bg-white text-black shadow-md fixed top-0 left-0 right-0 z-50'>
				<div className='flex justify-between items-center px-5 py-4'>
					<div>
						<Image className='w-[10rem]' src={Logo} alt='logo' />
					</div>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex gap-x-4 lg:gap-x-7'>
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
					<div className='hidden lg:flex gap-x-5'>
						<Button
							variant='secondary'
							className='text-base'
							onClick={() =>
								window.open(
									'https://forms.office.com/r/iaG8KK9mec',
									'_blank',
									'noopener,noreferrer'
								)
							}>
							Support Our Mission
						</Button>
						<Button
							variant='primary'
							className='text-base'
							onClick={() =>
								window.open(
									'https://registration.fashionfutureprogram.org',
									'_blank',
									'noopener,noreferrer'
								)
							}>
							Join the Program
						</Button>
					</div>

					{/* Hamburger Icon for Mobile */}
					<div
						className='lg:hidden cursor-pointer'
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
					<div className='lg:hidden flex flex-col px-5 space-y-4'>
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
						<div className='flex flex-col  space-y-3 pb-7 md:w-fit'>
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
