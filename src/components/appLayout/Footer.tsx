import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import Container from '../shared/Container';


const Footer: React.FC = () => {
	return (
		<footer className='bg-white font-semibold py-8 border-t border-gray-100'>
			<Container>
			{/* Main Footer Content */}
			<div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 md:text-start text-center gap-6 pt-9'>
				{/* Logo Section */}
				<div className='flex flex-col items-center md:items-start'>
					<div>
						<Image src={Logo} width={150} height={150} alt='logo' />
					</div>
				</div>

				{/* Navigation Links */}
				<div>
					<ul className='space-y-2'>
						<li className='cursor-pointer'>Home</li>
						<li className='cursor-pointer'>Programs</li>
						<li className='cursor-pointer'>Cluster Impact</li>
						<li className='cursor-pointer'>Get Involved</li>
					</ul>
				</div>

				<div>
					<ul className='space-y-2'>
						<li className='cursor-pointer'>About Us</li>
						<li className='cursor-pointer'>Contact Us</li>
						<li className='cursor-pointer'>Blog</li>
					</ul>
				</div>

				<div>
					<ul className='space-y-2'>
						<li className='cursor-pointer'>Legal</li>
						<li className='cursor-pointer'>Privacy Policy</li>
					</ul>
				</div>

				<div>
					<ul className='space-y-2'>
						<li className='cursor-pointer'>Connect With Us</li>
						<li className='cursor-pointer'>Privacy Policy</li>
					</ul>
				</div>
			</div>

			{/* Copyright Section */}
			<div className='md:mt-[5rem] flex flex-col justify-center items-center mt-16 mb-12 px-4 text-center text-sm md:text-base'>
				© 2024 Fashion Future Program. All Rights Reserved.
			</div>
			</Container>
		</footer>
	);
};

export default Footer;
