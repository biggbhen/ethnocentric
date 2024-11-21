import React from 'react';
import logo3 from '../../../assets/DECHSTUDIO (1).png';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className='min-h-[300px] px-[60px] py-[40px]'>
			<div className='flex  gap-8 justify-between'>
				<div className='flex gap-8 w-1/2'>
					<span className='font-aggrandirGrandHeavy'>START A PROJECT</span>
					<span className='font-aggrandirGrandHeavy'>PRIVACY</span>
				</div>
				<div className='flex gap-8 w-1/2 justify-end'>
					<span className='font-aggrandirGrandHeavy'>INSTAGRAM</span>
					<span className='font-aggrandirGrandHeavy'>DRIBBLE</span>
				</div>
			</div>
			<div className='my-[3rem] h-[12rem] relative'>
				<Image src={logo3} alt='logo' fill />
			</div>
			<div className='flex  gap-8 justify-between'>
				<div className='flex gap-8 w-1/2'>
					<span className='font-aggrandirGrandHeavy'>© 2024 DECH STUDIO</span>
				</div>
				<div className='flex gap-8 w-1/2 justify-end'>
					<span className='font-aggrandirGrandHeavy hover:cursor-pointer text-[#19DDA5] hover:text-[#D04300]'>
						BACK TO TOP
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
