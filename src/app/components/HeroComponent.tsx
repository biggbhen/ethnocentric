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
		{
			image: hero4,
			text: 'The Future Belongs to those who do',
			description: "Empowering action through skill and creativity, we’re driving social change and creating opportunities in fashion."
		},
		{
			image: hero1,
			text: 'Shaping the Future of Fashion, One Skill at a Time',
			description: "Join a transformative program equipping young Nigerians with mentorship, training, and resources to revolutionize the fashion industry and uplift communities."
		},
		{
			image: hero2,
			text: 'Inspiring Creativity, Driving Economic Growth.',
			description: "Blending heritage with modern ideas to cultivate a vibrant, diverse, and sustainable fashion industry that uplifts communities and promotes meaningful work opportunities."
		},
		{
			image: hero3,
			text: `Oge adighi eche mmadu
			

`,
			trans: "(because time waits for no man)",
			description: "Combining tradition with innovation to foster a thriving, inclusive, and sustainable fashion ecosystem that strengthens communities and creates dignified work opportunities."
		},
		{
			image: hero5,
			text: 'Empowering the Future of Fashion.',
			description: "Building a new generation of skilled artisans and visionary entrepreneurs to lead Nigeria's fashion industry into a prosperous future."
		},
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
						<div className='absolute inset-0 bg-black/70 z-10'></div>
						<div className='text-white text-center relative z-20'>
							<h1>
								<div className='text-white text-center px-4 py-8'>
									<h1 className='text-4xl font-medium text-bright-orange mb-6 md:text-5xl lg:text-6xl md:max-w-[50rem]'>
										{slide.text}
									</h1>
									<h3 className='text-2xl font-medium text-bright-orange mb-6 md:text-2xl lg:text-2xl md:max-w-[50rem]'>{slide.trans}</h3>
									<p className='text-lg  mb-8 md:text-xl md:max-w-[40rem] md:mx-auto text-white'>
										{slide.description}
									</p>
									<div className='flex justify-center gap-x-3 mx-auto w-full'>
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
