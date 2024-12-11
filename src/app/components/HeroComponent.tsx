'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import heroImage from '../../assets/heroImage.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Button from './ui/Button';


const HeroSwiper = () => {
	// Array of slide data (images and texts)
	const slides = [
		{ image: heroImage, text: 'Welcome to Slide 1' },
		{ image: heroImage, text: 'Explore Slide 2' },
		{ image: heroImage, text: 'Discover Slide 3' },
		{ image: heroImage, text: 'Learn on Slide 4' },
	];

	return (
		<Swiper
			modules={[Navigation, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			navigation
			style={{ height: '100vh' }} 
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div
						style={{
							position: 'relative',
							width: '100%',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Image
							src={slide.image}
							alt={`Slide ${index + 1}`}
							fill
							style={{ objectFit: 'cover', zIndex: -1 }}
						/>
						<div
							style={{
								zIndex: 1,
								color: '#fff',

								textAlign: 'center',
							}}>
							<h1>
								<div className='text-white text-center px-4 py-8'>
									<h1 className='text-4xl font-medium text-bright-orange mb-6 md:text-5xl lg:text-6xl md:max-w-[50rem]'>
										Shaping the Future of Fashion, One Skill at a Time
									</h1>
									<p className='text-lg text-dark-gray mb-8 md:text-xl md:max-w-[40rem] md:mx-auto'>
										Join a free program empowering young creatives with
										mentorship, training, and resources to thrive in the fashion
										industry. Together, we’re building a future where creativity
										leads to prosperity.
									</p>
									<div className='md:flex justify-center gap-x-3 mx-auto w-full'>
										<Button
											className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
											variant='secondary'>
											Explore Our Impact
										</Button>
										<Button
											className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
											variant='primary'>
											Join the Program
										</Button>
									</div>
								</div>
							</h1>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSwiper;
