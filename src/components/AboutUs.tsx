'use client';
import React from 'react';
import First from '@/assets/first.png';
import Divider from '@/assets/divider.svg';
import Second from '@/assets/second.png';
import DividerEnd from '@/assets/dividerend.svg';
import Image from 'next/image';
import Youtube from './Youtube';
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
import Button from './ui/Button';
import SharedSection from '@/components/shared/SharedSection';

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
			<SharedSection
				header='Empowering the Future of Fashion'
				image={First}
				altText='Fashion'
				imageLeft={false}>
				<p className='text-start mt-6 font-normal text-base md:text-lg'>
					The Fashion Future Program is a is an initiative by Ethnocentrique
					Limited in Partnership with the Mastercard Foundation, equipping
					aspiring artisans and entrepreneurs with the skills, tools, and
					resources they need to thrive in the ever-evolving fashion industry.
					From hands-on training to business development support, we’re shaping
					a new generation of fashion leaders andMSMEs equipped to succeed in
					today’s market placethereby strengthening Local communities.
				</p>
				<div className='flex flex-col md:flex-row gap-y-3 lg:gap-y-0 gap-x-5 mt-6'>
					{/* <Button className='text-sm md:text-base' variant='secondary'>
						Discover More
					</Button> */}
					<Button
						className='text-sm md:text-base'
						variant='primary'
						onClick={() =>
							window.open(
								'https://registration.fashionfutureprogram.org',
								'_blank',
								'noopener,noreferrer'
							)
						}>
						Join The Program
					</Button>
				</div>
			</SharedSection>

			<Image src={Divider} className='w-screen relative' alt='divider' />

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
				<h1 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A] text-center mx-auto'>
					Our Impact, Your Future
				</h1>
				<p className='text-center font-normal text-base md:text-lg max-w-[90%] md:max-w-[40rem] mx-auto mt-6'>
					Driving skills, innovation, and empowerment to transform the fashion
					industry into a hub of creativity and opportunity.
				</p>

				<SwiperComponent slides={slides} />
			</div>

			<Image src={Divider} className='w-screen' alt='divider' />

			<SharedSection
				header='Your Future Awaits — At No Cost to You'
				image={Second}
				altText='Fashion'
				imageLeft={true}>
				<p className='text-start mt-6 font-normal text-base md:text-lg'>
					At the Fashion Future Program, we believe creativity should never be
					constrained by financial barriers. That’s why our training,
					mentorship, and resources are entirely free. We’re here to help you
					turn your passion into a profession, empowering you to thrive in the
					fashion industry.
				</p>
				<div className='flex flex-col md:flex-row gap-y-3 lg:gap-y-0 gap-x-5 mt-6'>
					{/* <Button className='text-sm md:text-base' variant='secondary'>
						Discover More
					</Button> */}
					<Button
						className='text-sm 
						md:text-base'
						variant='primary'
						onClick={() =>
							window.open(
								'https://registration.fashionfutureprogram.org',
								'_blank',
								'noopener,noreferrer'
							)
						}>
						Join The Program
					</Button>
				</div>
			</SharedSection>

			<Image className='w-screen' src={Divider} alt='divider' />
			<Youtube url='https://www.youtube.com/watch?v=JotFlM1yic0' />

			<Image className='w-screen' src={DividerEnd} alt='divider' />
		</>
	);
};

export default AboutUs;
