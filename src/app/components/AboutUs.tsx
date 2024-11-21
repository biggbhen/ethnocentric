import React from 'react';

type Props = {};

const AboutUs = (props: Props) => {
	return (
		<div className=' bg-white text-black px-[60px] py-[80px]'>
			<p className='text-xl'>ABOUT US</p>
			<div>
				<p className='text-[4rem] font-aggrandirGrandHeavy w-[60%] leading-none'>
					Unleash Your Creativity, Stress-Free
				</p>
			</div>
			<div className='flex justify-end mt-[2rem]'>
				<p className='font-aggrandirGrandHeavy w-[65%] text-lg'>
					At DECH STUDIO, we understand the challenges creative professionals
					face when it comes to showcasing their work online. Slow loading
					times, technical hiccups, and the constant struggle to maintain an
					up-to-date portfolio are now things of the past.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
