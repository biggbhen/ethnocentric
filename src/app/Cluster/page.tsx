'use client';
import React from 'react';
import Cluster2 from '../../assets/cluster2.png';
import Cluster3 from '../../assets/cluster3.png';
import Cluster4 from '../../assets/cluster4.jpg';
import Cluster1 from '../../assets/cluster1.jpg';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Divider from '../../assets/divider.svg';
import Divider2 from '../../assets/divider2.svg';
import FashionSectionList from '../components/FashionSectionList';
import ImageBackground from '../components/ImageBackground';

const index = () => {
	return (
		<>
			<div className='m-5'>
				<ImageBackground
					imageSrc={Cluster1}
					Imageclass='filter brightness-50 rounded-tl-[64px] rounded-br-[64px]'
					alt='A beautiful landscape background'
					className='md:h-screen h-[70vh]'>
					<div className='text-white text-center px-4 py-8 md:max-w-[50rem]'>
						<h1 className='text-3xl font-medium mb-4 md:text-4xl lg:text-5xl '>
							Transforming Aba into Africa’s Creative Powerhouse
						</h1>
						<p className='text-lg mb-8 md:text-xl  md:mx-auto'>
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
			</div>

			<Image className='mt-10 w-screen' src={Divider} alt='divider' />
			<FashionSectionList
				header='Why Aba?'
				description={[
					'Aba is the heart of Nigeria’s fashion and textile industry, home to skilled artisans and a rich history of craftsmanship.',
					'The Fashion Future Program focuses on enhancing Aba’s potential by investing in its people, businesses, and infrastructure.',
				]}
				image={Cluster2}
				altText='Winter Collection'
				imageLeft={true}
				primaryButtonText='Join the Program '
				primaryButtonAction={() => console.log('Shop Now clicked')}
				secondaryButtonText='Learn About Us'
				secondaryButtonAction={() => console.log('Learn More clicked')}
			/>
			<Image className=' w-screen' src={Divider2} alt='divider' />

			<FashionSectionList
				header='The Future of Aba’s
Clusters'
				subHeader='What’s Next?'
				description={[
					'Scaling the model to other regions.',
					'Introducing advanced training modules in sustainable fashion practices.',
					'Expanding global partnerships to open more market opportunities. ',
				]}
				image={Cluster3}
				altText='Winter Collection'
				imageLeft={false}
				primaryButtonText='Discover More'
				primaryButtonAction={() => console.log('Shop Now clicked')}
				secondaryButtonText='Join the Program'
				secondaryButtonAction={() => console.log('Learn More clicked')}
			/>

			<Image className=' w-screen' src={Divider} alt='divider' />

			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={Cluster4}
					alt='A beautiful landscape background'
					className='md:h-screen h-[70vh]'>
					<div className='text-white text-center px-4 py-8'>
						<h1 className='text-4xl font-medium mb-3 md:text-5xl lg:text-5xl'>
							Be Part of the Transformation
						</h1>

						<p className='text-2xl  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Whether you’re a policymaker, investor, or creative, there’s a
							role for everyone in shaping the future of Aba’s fashion industry.
						</p>
						<div className='flex justify-center gap-x-6'>
							<Button
								className='text-sm px-6 py-2 md:text-base md:px-10 md:py-3'
								variant='secondary'>
								Discover More
							</Button>
							<Button
								className='text-sm px-6 py-2 md:text-base md:px-4 md:py-3'
								variant='primary'>
								Support the Clusters
							</Button>
						</div>
					</div>
				</ImageBackground>
			</div>
			<Image className=' w-screen' src={Divider} alt='divider' />
		</>
	);
};

export default index;
