import React from 'react';

type Props = {};

const OurProcess = (props: Props) => {

	// adding this line just to build
	return (
		<div className='bg-[#D04300] px-[60px] py-[80px]'>
			<h2 className='text-xl'>OUR PROCESS</h2>
			<p className='text-[4rem] font-aggrandirGrandHeavy leading-none'>
				What to expect?
			</p>
			<ul className='mt-12'>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-8 items-center'>
					<span className='font-anton w-[30%] text-3xl'>1</span>
					<div className='flex flex-col gap-2 w-[60%]'>
						<h2 className='font-anton text-3xl '>CONSULTATION</h2>
						<p className='text-xl'>
							We start by understanding your vision, goals, and unique style.
						</p>
					</div>
				</li>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-8 items-center'>
					<span className='font-anton w-[30%] text-3xl'>2</span>
					<div className='flex flex-col gap-2 w-[60%]'>
						<h2 className='font-anton text-3xl '>Design & Development</h2>
						<p className='text-xl'>
							Our team crafts a tailored website that captures the essence of
							your creativity.
						</p>
					</div>
				</li>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-8 items-center'>
					<span className='font-anton w-[30%] text-3xl'>3</span>
					<div className='flex flex-col gap-2 w-[60%]'>
						<h2 className='font-anton text-3xl '>
							Retainer Structure Activation
						</h2>
						<p className='text-xl'>
							Once your website is live, our retainer structure kicks in,
							guaranteeing ongoing updates and maintenance.
						</p>
					</div>
				</li>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-8 items-center'>
					<span className='font-anton w-[30%] text-3xl'>4</span>
					<div className='flex flex-col gap-2 w-[60%]'>
						<h2 className='font-anton text-3xl '>Continuous Improvement</h2>
						<p className='text-xl'>
							We continually refine your website based on analytics and your
							evolving needs, ensuring it always reflects your latest work.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default OurProcess;
