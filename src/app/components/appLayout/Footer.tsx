import React from 'react';


const Footer: React.FC = () => {
	return (
		<footer className='bg-[#E86025] text-white font-semibold py-8'>
			{/* Main Footer Content */}
			<div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 text-start gap-6 px-4 md:px-[3rem] pt-9'>
				{/* Logo Section */}
				<div className='flex flex-col items-center md:items-start'>
					<div className='text-xl font-bold mb-4'>Logo</div>
				</div>

				{/* Navigation Links */}
				<div>
					<ul className='text-[#E0E0E0] space-y-2'>
						<li className='cursor-pointer text-white'>Home</li>
						<li className='cursor-pointer'>Programs</li>
						<li className='cursor-pointer'>Cluster Impact</li>
						<li className='cursor-pointer'>Get Involved</li>
					</ul>
				</div>

				<div>
					<ul className='text-[#E0E0E0] space-y-2'>
						<li className='cursor-pointer text-white'>About Us</li>
						<li className='cursor-pointer'>Contact Us</li>
						<li className='cursor-pointer'>Blog</li>
					</ul>
				</div>

				<div>
					<ul className='text-[#E0E0E0] space-y-2'>
						<li className='cursor-pointer text-white'>Legal</li>
						<li className='cursor-pointer'>Privacy Policy</li>
					</ul>
				</div>

				<div>
					<ul className='text-[#E0E0E0] space-y-2'>
						<li className='cursor-pointer text-white'>Connect With Us</li>
						<li className='cursor-pointer'>Privacy Policy</li>
					</ul>
				</div>
			</div>

			{/* Copyright Section */}
			<div className='text-[#E0E0E0] md:mt-[10rem] flex flex-col justify-center items-center mt-16 mb-12 px-4 text-center text-sm md:text-base'>
				© 2024 Fashion Future Program. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
