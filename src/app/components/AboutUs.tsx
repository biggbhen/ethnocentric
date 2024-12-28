'use client';
import React from 'react';
import First from '../../assets/first.png';
import Divider from '../../assets/divider.svg';
import Second from '../../assets/second.png';
import DividerEnd from '../../assets/dividerend.svg';
import Image from 'next/image';
import Youtube from './Youtube';
import FashionSection from './FashionSectionFashionSection';

type Props = {};

const AboutUs = (props: Props) => {
	return (
		<>
			<Image src={Divider} className='w-screen' alt='divider' />
			<FashionSection
				header='Empowering the Future of Fashion'
				description='We are building a thriving community of young fashion entrepreneurs and artisans by providing hands-on training, mentorship, and access to resources that spark innovation. Together, we’re shaping a fashion industry where creativity meets opportunity and every talent finds its place.'
				image={First}
				altText='Fashion'
				imageLeft={false}
				primaryButtonText='Join the Program'
				primaryButtonAction={() => alert('Joining Program')}
				secondaryButtonText='Discover More'
				secondaryButtonAction={() => alert('Discovering More')}
			/>

			<Image src={Divider} className='w-screen' alt='divider' />

			<FashionSection
				header='	Your Future Awaits — At No Cost to You'
				description='At the Fashion Future Program, we believe creativity should never
				be constrained by financial barriers. That’s why our training,
			  mentorship, and resources are entirely free. We’re here to help
				you turn your passion into a profession, empowering you to thrive
				in the fashion industry.'
				image={Second}
				altText='Fashion'
				imageLeft={true}
				primaryButtonText='Join the Program'
				primaryButtonAction={() => alert('Joining Program')}
				secondaryButtonText='Discover More'
				secondaryButtonAction={() => alert('Discovering More')}
			/>

			<Image className='w-screen' src={Divider} alt='divider' />
			<Youtube url='https://youtu.be/41kQc083s6c?si=xd1wJPpFlrMvL14i' />

			<Image className='w-screen' src={DividerEnd} alt='divider' />
		</>
	);
};

export default AboutUs;
