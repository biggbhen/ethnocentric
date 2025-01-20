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
import image4 from '@/assets/impact4.jpg'
import image5 from '@/assets/impact6.jpg'
import image6 from '@/assets/impactlast.jpg'
import speak from '@/assets/speak.png'
import Last from './Last';
import WhatWeDo from './WhatWeDo';

type Props = {};

const AboutUs = (props: Props) => {
	const slides = [
		{
			image: image1,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Skills Training',
			title: '5,000+ Youth Trained',
			description: 'Empowering aspiring fashion professionals in garment making, footwear, and leatherworks through hands-on apprenticeship and mentorship. Learn from seasoned artisans and master the craft that sets trends.',

		},
		{
			image: image2,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Supporting Businesses',
			title: '4,000 MSMEs Supported',
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
			image: image4,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Regional Economic Hubs',
			title: '•3 Major Clusters',
			description: 'Driving economic growth through innovation and collaboration in Abia State. These clusters foster skill development, mastercraft persons, and sustainable regional development.',
		},
		{
			image: image6,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Expanding Opportunities',
			title: '30% Growth in Market Linkages',
			description: 'Enhancing connections between mastercraft persons and buyers, boosting the market reach of local fashion businesses, and creating a ripple effect of economic empowerment.',
		},
		{
			image: image5,
			altText: 'Image 1 description',
			smallTextBelowImage: 'Expert Craftsmanship',
			title: '1,000+ Mastercraft Persons',
			description: 'Building a legacy of excellence by training over a thousand mastercraft persons who preserve tradition while innovating for the future of fashion.',
		},



	];
	return (
		<>
			<Image src={Divider} className='w-screen' alt='divider' />
			<FashionSection
				header='Empowering the Future of Fashion'
				description='The Fashion Future Program is a is an initiative by Ethnocentrique Limited in Partnership with the Mastercard Foundation, equipping aspiring artisans and entrepreneurs with the skills, tools, and resources they need to thrive in the ever-evolving fashion industry.
				From hands-on training to business development support, we’re shaping a new generation of fashion leaders andMSMEs equipped to succeed in today’s market placethereby strengthening Local communities.'
				image={First}
				altText='Fashion'
				imageLeft={false}
				primaryButtonText='Join the Program'
				primaryButtonAction={() => alert('Joining Program')}
				secondaryButtonText='Discover More'
				secondaryButtonAction={() => alert('Discovering More')}
			/>

			<Image src={Divider} className='w-screen' alt='divider' />

			<WhatWeDo />
			<Image src={Divider} className='w-screen' alt='divider' />
			<Last
				header='Who We Speak To'
				description1=' Vibrant individuals including women, men, and people with disabilities, who are passionate about fashion and eager to turn their skills into a sustainable career.'
				description2='Fashion entrepreneurs in the fashion industry, aspiring designers or artisans, eager to grow and stay market competitive.'
				image={speak}
				altText='Fashion'
				imageLeft={true}
				subHeader2='MSMEs (Micro, Small, and Medium Enterprises): '
				primaryButtonText='Join the Program'
				primaryButtonAction={() => alert('Joining Program')}
				secondaryButtonText='Discover More'
				secondaryButtonAction={() => alert('Discovering More')}
				subHeader1='Young Creatives (Ages 18-35):'
			/>
			<Image src={Divider} className='w-screen' alt='divider' />
			<div className='my-[5rem]'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-dark-gray text-center my-4 md:my-6 lg:my-8'>
					Our Impact, Your Future
				</h1>
				<p className='text-center text-dark-gray text-base md:text-lg lg:text-2xl max-w-[90%] md:max-w-[40rem] my-4 md:my-5 lg:my-6 mx-auto'>
					Driving skills, innovation, and empowerment to transform the fashion
					industry into a hub of creativity and opportunity.
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
