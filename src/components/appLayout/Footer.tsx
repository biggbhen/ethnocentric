"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/Logo.png';
import Container from '../shared/Container';

const Footer: React.FC = () => {
	const pathname = usePathname();

	
	const isActive = (path: string) => pathname === path;

	return (
		<footer className='bg-white font-semibold py-8 border-t border-gray-100'>
			<Container>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:text-start text-center gap-6 pt-9'>
					{/* Logo Section */}
					<div className='flex flex-col items-center md:items-start'>
						<div>
							<Image src={Logo} width={150} height={150} alt='logo' />
						</div>
					</div>

					{/* Navigation Links */}
					<div>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/'
									className={`cursor-pointer ${
										isActive('/') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/programs'
									className={`cursor-pointer ${
										isActive('/programs') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Programs
								</Link>
							</li>
							<li>
								<Link
									href='/Cluster'
									className={`cursor-pointer ${
										isActive('/cluster') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Cluster
								</Link>
							</li>
							<li>
								<Link
									href='/get-involved'
									className={`cursor-pointer ${
										isActive('/get-involved') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Get Involved
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className={`cursor-pointer ${
										isActive('/about') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/contact-us'
									className={`cursor-pointer ${
										isActive('/contact-us') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className={`cursor-pointer ${
										isActive('/blog') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/legal'
									className={`cursor-pointer ${
										isActive('/legal') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Legal
								</Link>
							</li>
							<li>
								<Link
									href='/privacy-policy'
									className={`cursor-pointer ${
										isActive('/privacy-policy') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<ul className='space-y-2'>
							<li className='cursor-pointer'>Connect With Us</li>
							<li>
								<Link
									href='/privacy-policy'
									className={`cursor-pointer ${
										isActive('/privacy-policy') ? 'text-[#E86025]' : 'text-[#7A7A7A]'
									} hover:text-[#E86025]`}
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright Section */}
				<div className='md:mt-[5rem] flex flex-col justify-center items-center mt-16 mb-12 px-4 text-center text-[#7A7A7A] text-sm md:text-base'>
					© 2024 Fashion Future Program. All Rights Reserved.
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
