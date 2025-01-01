'use client';
import React from 'react';
import contactImage from '../../assets/contact.jpg';
import Business from '../../assets/business.jpg';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Divider from '../../assets/divider.svg';
import Divider2 from '../../assets/divider2.svg';
import heroImage from '../../assets/heroImage.svg';
import FashionSectionList from '../components/FashionSectionList';
import ImageBackground from '../components/ImageBackground';
import SwiperComponent from '../components/SwiperComponent';
import image1 from '@/assets/homeImage1.png'
import image2 from '@/assets/homeImage2.png'
import image3 from '@/assets/homeImage3.png'
import Cluster3 from '../../assets/cluster3.png';

const index = () => {
	const slides = [
		{
			image: image1,
			altText: 'Image 1 description',
			title: 'Garment Making',
			description: 'Learn the art of designing, cutting, and constructing high-quality garments from industry experts whilst using quality materials.',
			 extraText: 'Register'
		},
		{
			image: image2,
			altText: 'Image 1 description',
		
			title: 'Footwear Crafting',
			description: 'Master the process of creating stylish and durable footwear, blending traditional techniques with modern trends.',
 extraText: 'Register'
		},
		{
			image: image3,
			altText: 'Image 1 description',
		
			title: 'Leatherworks',
			description: 'Hone your skills in  crafting leather goods with precision and attention to detail. Learn how to put a unique spin on your designs.',
    extraText: 'Register'
              
		},
		

	];
	return (
		<>
			<ImageBackground
				imageSrc={heroImage}
				alt='A beautiful landscape background'
				className='md:h-screen h-[70vh]'>
				<div className='text-white text-center px-4 py-8'>
					<h1 className='text-4xl font-medium text-bright-orange mb-6 md:text-6xl lg:text-7xl'>
						Where Skills Meet Opportunity
					</h1>
					<p className='text-lg text-dark-gray mb-8 md:text-xl md:max-w-[40rem] md:mx-auto'>
						Explore our comprehensive programs designed to empower aspiring
						fashion professionals with the skills, resources, and mentorship
						needed to thrive in the industry.
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

			<Image src={Divider} alt='divider' />

			<div className='my-[5rem]'>
    <h1 className="text-5xl font-medium text-dark-gray text-center my-8">
	Training Programs
    </h1>
    <p className="text-center text-dark-gray text-2xl max-w-[40rem] my-6 mx-auto">
	Heads-on learning that bridges creativity and craftsmanship while transforming lives and driving growth. Addressing industry shortages with comprehensive training.
    </p>
    
		 <SwiperComponent slides={slides} />
	 
   
</div>

			<FashionSectionList
				header='Apprentice Model'
				subHeader='Learning from Masters of the Craft.'
				description={[
					'Participants gain practical experience under the guidance of skilled artisans in specialized clusters.',
					'This apprenticeship approach ensures real-world readiness by combining traditional skills with entrepreneurial training.',
					'Certification is provided under the National Skills Qualification Framework (NSQF) to enhance credibility and career prospects.',
				]}
				image={Cluster3}
				altText='Winter Collection'
				imageLeft={true}
				primaryButtonText='Learn About Us'
				primaryButtonAction={() => console.log('Shop Now clicked')}
				secondaryButtonText='Join the Program'
				secondaryButtonAction={() => console.log('Learn More clicked')}
			/>
			<Image src={Divider2} alt='divider' />

			<FashionSectionList
				header='Business Development Support'
				subHeader='Empowering MSMEs to Thrive.'
				description={[
					'Tailored support for 4,000 MSMEs to improve productivity and sustainability.',
					'Services include access to market trends, infrastructure, and financial management training.',
					'Special focus on empowering women-led businesses',
				]}
				image={Business}
				altText='Winter Collection'
				imageLeft={false}
				primaryButtonText='Discover More'
				primaryButtonAction={() => console.log('Shop Now clicked')}
				secondaryButtonText='Join the Program'
				secondaryButtonAction={() => console.log('Learn More clicked')}
			/>

			<Image src={Divider} alt='divider' />

			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={contactImage}
					alt='A beautiful landscape background'
					className='md:h-screen h-[70vh]'>
					<div className='text-white text-center px-4 py-8 '>
						<h1 className='text-4xl font-medium mb-3 md:text-5xl lg:text-5xl'>
							Why It Matters
						</h1>
						<p className='mb-10 text-xl font-normal'>
							Transforming Lives, Driving Growth.
						</p>
						<div className='text-2xl font-normal  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Explore our comprehensive programs designed to empower aspiring
							fashion professionals with the skills, resources, and mentorship
							needed to thrive in the industry.
						</div>
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
		</>
	);
};

export default index;
