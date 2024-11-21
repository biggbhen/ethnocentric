import Image from 'next/image';
import React from 'react';
import HeroBg from '../../assets/Group 7.png';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

type Props = {};

const HeroComponent = (props: Props) => {
	return (
		<div className='h-screen w-full relative bg-black text-white flex items-end pb-[30px]'>
			<Image src={HeroBg} fill alt='hero background' />

			<div className='min-h-[100px] relative z-10 px-[60px] flex gap-x-[100px] w-full justify-between'>
				<div className='w-[50%]'>
					<p className='text-[4rem] font-aggrandirGrandHeavy'>Your Website</p>
					<p className='text-[4rem] font-aggrandirGrandHeavy'>Your Way</p>
				</div>
				<div className='w-[50%] flex flex-col justify-end'>
					{' '}
					<p className='font-aggrandirGrandHeavy mb-[1rem] text-lg'>
						Build a digital space that fully expresses your creative vision to
						the world.
					</p>
					<p className=' font-aggrandirGrandHeavy'>
						<Link href={'#'} className='flex items-center gap-x-[10px]'>
							<FaLongArrowAltRight className='text-[#E37A00]' />
							Get Started
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroComponent;
