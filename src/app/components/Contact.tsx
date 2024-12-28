import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

type Props = {};

const Contact = (props: Props) => {
	return (
		<div className='px-[60px] py-[80px] border-b-2 border-b-[#242424]'>
			<h2 className='text-[1.5rem]'>CONTACT US</h2>
			<p className='text-[4rem] font-aggrandirGrandHeavy w-[60%] leading-none'>
				Your Creative Journey Begins Here
			</p>
			<div className='flex gap-x-8 mt-8'>
				<div className='w-1/2 flex items-end'>
					<p className=' font-aggrandirGrandHeavy'>
						<Link
							href={'#'}
							className='flex items-center gap-x-[10px] text-[#D04300]'>
							<FaLongArrowAltRight />
							Get Started
						</Link>
					</p>
				</div>
				<div className='w-1/2'>
					<p className='text-lg '>
						Our team is dedicated to addressing
						<span className='font-aggrandirGrandHeavy'>
							{' '}
							every challenge creative professionals face with managing a
							personal website,
						</span>{' '}
						turning them into opportunities for growth.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
