'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Divider from '../../assets/divider.svg';
import heroImage from '../../assets/heroImage.svg';
import Blog1 from '../../assets/blog1.png';
import ImageBackground from '../components/ImageBackground';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';

const index = () => {
	const blogData = [
		{
			title:
				'Empowering Tomorrow’s Fashion Leaders: Highlights from our second cohort orientation.',
			description:
				'Discover how our recent cohort of young talents began their journey into the fashion industry. From hands-on training to mentorship, see how the program is transforming lives, one skill at a time.',
			linkText: 'Read more',
			onLinkClick: () => console.log('Read more clicked'),
			mainImageSrc: Blog1,
		
		},
	];
	return (
		<>
			<div className=''>
				<ImageBackground
					imageSrc={heroImage}
					alt='A beautiful landscape background'
					className='md:h-screen h-[70vh]'>
					<div className='text-white text-center px-4 py-8'>
						<h1 className='text-4xl font-medium md:max-w-[55rem] text-bright-orange mb-6 md:text-6xl lg:text-7xl'>
							Stories of Transformation and Innovation in Fashion
						</h1>
						<p className='text-lg text-dark-gray mb-8 md:text-xl md:max-w-[40rem] md:mx-auto'>
							Explore inspiring updates, success stories, and industry insights
							from the Fashion Future Program. Stay informed about how we’re
							shaping the future of fashion in Nigeria and beyond.
						</p>
						<div className='flex justify-center'>
							<Button
								className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
								variant='primary'>
								Join the Program
							</Button>
						</div>
					</div>
				</ImageBackground>
			</div>

			<Image src={Divider} alt='divider' />

			<div className='mx-[5rem] my-[7rem]'>
				<div className='flex justify-between'>
					<div>
						
						<Sidebar />




					</div>
					<div>
						{blogData.map((blog, index) => (
							<BlogCard
								key={index}
								title={blog.title}
								description={blog.description}
								linkText={blog.linkText}
								onLinkClick={blog.onLinkClick}
								mainImageSrc={blog.mainImageSrc}
								
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
