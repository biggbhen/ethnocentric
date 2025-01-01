'use client';
import React from 'react';
import First from '../../assets/first.png';
import Divider from '../../assets/divider.svg';
import Second from '../../assets/second.png';
import DividerEnd from '../../assets/dividerend.svg';
import Image from 'next/image';
import Youtube from './Youtube';
import FashionSection from './FashionSectionFashionSection';
import SwiperComponent from './SwiperComponent';
import image1 from '@/assets/homeImage1.png'
import image2 from '@/assets/homeImage2.png'
import image3 from '@/assets/homeImage3.png'

type Props = {};

const AboutUs = (props: Props) => {
	const slides = [
		{
			image: image1,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Skills Training',
			title: '5000+ Youth Trained',
			description: 'Empowering aspiring fashion professionals in garment making, footwear, and leatherworks through hands-on apprenticeship and mentorship. Learn from seasoned artisans and master the craft that sets trends.',

		},
		{
			image: image2,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Supporting Businesses',
			title: '4000 MSMEs Supported',
			description: 'Providing tailored business development services to help fashion entrepreneurs unlock their full potential. From market knowledge to infrastructure, we create thriving businesses that encourage and sustain growth.',

		},
		{
			image: image3,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Inclusive Empowerment',
			title: 'Focused on Inclusion',
			description: 'Championing diversity by empowering young women, supporting women-led MSMEs, and creating opportunities for people with disabilities. Together, we make the fashion industry accessible to all.',

		},
		{
			image: image2,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Supporting Businesses',
			title: '4000 MSMEs Supported',
			description: 'Providing tailored business development services to help fashion entrepreneurs unlock their full potential. From market knowledge to infrastructure, we create thriving businesses that encourage and sustain growth.',

		},
		{
			image: image3,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Inclusive Empowerment',
			title: 'Focused on Inclusion',
			description: 'Championing diversity by empowering young women, supporting women-led MSMEs, and creating opportunities for people with disabilities. Together, we make the fashion industry accessible to all.',

		},
		{
			image: image2,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Supporting Businesses',
			title: '4000 MSMEs Supported',
			description: 'Providing tailored business development services to help fashion entrepreneurs unlock their full potential. From market knowledge to infrastructure, we create thriving businesses that encourage and sustain growth.',

		},
		{
			image: image3,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Inclusive Empowerment',
			title: 'Focused on Inclusion',
			description: 'Championing diversity by empowering young women, supporting women-led MSMEs, and creating opportunities for people with disabilities. Together, we make the fashion industry accessible to all.',

		},

	];
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
			<div className='my-[5rem]'>
    <h1 className="text-5xl font-medium text-dark-gray text-center my-8">
        Our Impact, Your Future
    </h1>
    <p className="text-center text-dark-gray text-2xl max-w-[40rem] my-6 mx-auto">
        Driving skills, innovation, and empowerment to transform the fashion industry into a hub of creativity and opportunity.
    </p>
    
		 <SwiperComponent slides={slides} />
	 
   
</div>


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
