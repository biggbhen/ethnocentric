'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';
import hero4 from '../../assets/hero4.jpg';
import hero5 from '../../assets/hero5.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from './ui/Button';

const HeroSwiper = () => {
	const slides = [
		{ image: hero4, text: 'The Future Belongs to those who do' },
		{ image: hero1, text: 'Explore Slide 2' },
		{ image: hero2, text: 'Inspiring Creativity, Driving Economic Growth.' },
		{ image: hero3, text: 'Learn on Slide 4' },
		{ image: hero5, text: 'Empowering the Future of Fashion.' },
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
			style={{ height: '100vh' }}>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div className='relative w-full h-full flex flex-col items-center justify-center'>
						<Image
							src={slide.image}
							alt={`Slide ${index + 1}`}
							fill
							style={{ objectFit: 'cover', objectPosition: 'center 35%', zIndex: -1 }}
						/>
						<div className='absolute inset-0 bg-black/60 z-10'></div>
						<div className='text-white text-center relative z-20'>
							<h1>
								<div className='text-white text-center px-4 py-8'>
									<h1 className='text-4xl font-medium text-bright-orange mb-6 md:text-5xl lg:text-6xl md:max-w-[50rem]'>
										{slide.text}
									</h1>
									<p className='text-lg  mb-8 md:text-xl md:max-w-[40rem] md:mx-auto text-white'>
										Through innovation, skill development, and community engagement, the <strong>Fashion Future Program</strong> is transforming
										lives, fostering creativity, and building sustainable fashion businesses across Nigeria.
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
