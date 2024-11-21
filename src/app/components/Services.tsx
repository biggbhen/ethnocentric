import React from 'react';

type Props = {};

const Services = (props: Props) => {
	return (
		<div className='bg-[#0042B5] min-h-screen px-[60px] py-[80px]'>
			<h2 className='text-xl'>WHY DECH STUDIO?</h2>
			<p className='text-[4rem] font-aggrandirGrandHeavy w-[60%] leading-none'>
				Solutions to your Every Challenge
			</p>
			<p className=' mt-[2rem] text-lg  w-[40%]'>
				Our team is dedicated to addressing
				<span className='font-aggrandirGrandHeavy'>
					{' '}
					every challenge creative professionals face with managing a personal
					website,
				</span>{' '}
				turning them into opportunities for growth.
			</p>
			<div className=' mt-[3rem] flex justify-end'>
				<div className='min-h-[200px] w-[65%] flex gap-8 justify-between'>
					<div>
						<div className='mb-4'>
							<h2 className='font-anton text-lg'>
								Balancing Creativity & Professionalism
							</h2>
							<p className='mt-2'>
								Our design experts will craft your website to seamlessly balance
								creativity while maintaining a professional image, thereby
								captivating visitors and increasing your perceived value at a
								glance.
							</p>
						</div>
						<div className='mb-4'>
							<h2 className='font-anton text-lg'>Technical Issues</h2>
							<p className='mt-2'>
								No more broken links or compatibility issues. We handle the
								technical side, leaving you free to focus on what you do best –
								creating.
							</p>
						</div>
						<div className=''>
							<h2 className='font-anton text-lg'>Search Engine Optimization</h2>
							<p className='mt-2'>
								We’ll maximize your visibility and make sure your website ranks
								high on search engines, helping you connect with the right
								audience and attracting potential clients or collaborators.
							</p>
						</div>
					</div>
					<div>
						<div className='mb-4'>
							<h2 className='font-anton text-lg'>Mobile-First Approach</h2>
							<p className='mt-2'>
								Our mobile-first approach ensures that your website looks
								stunning and functions flawlessly across devices, capturing
								attention wherever your audience may be.
							</p>
						</div>
						<div className='mb-4'>
							<h2 className='font-anton text-lg'>Content Management</h2>
							<p className='mt-2'>
								Keep your portfolio current effortlessly. With Palora, you never
								have to worry about updating your website again – we’ll do it
								for you.
							</p>
						</div>
						<div>
							<h2 className='font-anton text-lg'>Analytics</h2>
							<p className='mt-2'>
								Get simplified reports sent to you monthly to help you
								understand your audience better, make informed decisions and
								refine your online strategy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
