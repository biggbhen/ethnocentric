import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';

type Props = {};

const Partners = (props: Props) => {
	return (
		<div className='bg-[#0D0D0D] px-[60px] py-[80px]'>
			<div className='w-[60%]'>
				<h2 className='text-xl'>PARTNERS</h2>
				<p className='text-[4rem] font-aggrandirGrandHeavy leading-none'>
					Discover the Dech Studio{' '}
					<span className='text-[#19DDA5]'>Advantage</span>
				</p>
				<FaLongArrowAltDown className='h-[50px] text-[#19DDA5]' />
			</div>
			<div className='flex justify-end mt-[2rem] '>
				<p className='text-lg w-[65%]'>
					<span className='font-aggrandirGrandHeavy'>
						Dech Studio introduces a revolutionary retainer structure
					</span>{' '}
					that takes the stress out of maintaining your website. With us, your
					website is not just a one-time project but an ongoing collaboration.
					We are here for the long haul to ensure:
				</p>
			</div>
			<ul className='mt-12'>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-12 items-center hover:text-[#19DDA5]'>
					<span className='font-anton  text-3xl'>1</span>
					<p className='text-2xl'>
						You never lose clients again because of website troubles
					</p>
				</li>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-12 items-center hover:text-[#19DDA5]'>
					<span className='font-anton  text-3xl'>2</span>
					<p className='text-2xl'>
						Your digital space scales with you and mirrors your growth in
						real-time
					</p>
				</li>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-12 items-center hover:text-[#19DDA5]'>
					<span className='font-anton  text-3xl'>3</span>
					<p className='text-2xl'>
						More of the right audience discover your work
					</p>
				</li>
				<li className='border-b border-b-[#FFFFFF52] py-6 flex gap-12 items-center hover:text-[#19DDA5]'>
					<span className='font-anton  text-3xl'>4</span>
					<p className='text-2xl'>
						Your website gets fortified with the latest security updates
					</p>
				</li>
			</ul>
			<div className='flex justify-end mt-[2rem] '>
				<p className='text-lg w-[65%]'>
					<span className='font-aggrandirGrandHeavy'>
						Dech Studio&apos;s services are tailor-made for a diverse range of
						creative professionals
					</span>{' '}
					who want to showcase their talents and creations effectively. Our
					solutions cater to individuals and businesses in various creative
					fields, including but not limited to:
				</p>
			</div>
			<div className='mt-8'>
				<p className='font-anton text-[100px]'>PHOTOGRAPHERS</p>
				<p className='font-anton text-[100px]'> CINEMATOGRAPHERS</p>
				<p className='font-anton text-[100px]'> ANIMATORS</p>
				<p className='font-anton text-[100px]'> GRAPHIC DESIGNERS</p>
				<p className='font-anton text-[100px]'>ILUSTRATORS</p>
				<p className='font-anton text-[100px]'>ARCHITECTS</p>
				<p className='font-anton text-[100px]'>INTERIOR DESIGNERS</p>
				<p className='font-anton text-[100px]'>FASHION DESIGNS</p>
				<p className='font-anton text-[100px]'>Musicians</p>
				<p className='font-anton text-[100px]'>FINE ARTISTS</p>
				<p className='font-anton text-[100px]'>MAKE ARTISTS</p>
			</div>
		</div>
	);
};

export default Partners;
