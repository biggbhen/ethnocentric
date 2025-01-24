'use client';
import React from 'react';
import Business from '@/assets/business.jpg';
import Image from 'next/image';
import Divider from '@/assets/divider.svg';
import Divider2 from '@/assets/divider2.svg';
import heroImage from '@/assets/heroImage.svg';
import image1 from '@/assets/train1.png'
import image2 from '@/assets/train2.png'
import image3 from '@/assets/train3.png'
import Cluster3 from '@/assets/cluster3.png';
import contactImage from '@/assets/contact.jpg';
import jobImg from '@/assets/whyItmatters.jpg';
import policyImg from '@/assets/ffpolicy.jpg';
import SharedSection from '@/components/shared/SharedSection';
import ImageBackground from '@/components/ImageBackground';
import SwiperComponent from '@/components/SwiperComponent';
import Button from '@/components/ui/Button';

const index = () => {
	const slides = [
		{
			image: image1,
			altText: 'Image 1 description',
			title: 'Garment Making',
			description: `Learn the art of designing, cutting, and constructing
high-quality garments from industry experts whilst
using quality materials.`,
			extraText: 'Register'
		},
		{
			image: image2,
			altText: 'Image 1 description',

			title: 'Footwear Crafting',
			description: `Master the process of creating stylish and durable
footwear, blending traditional techniques with
modern trends.`,
			extraText: 'Register'
		},
		{
			image: image3,
			altText: 'Image 1 description',

			title: 'Leatherworks',
			description: `Hone your skills in  crafting leather goods with
precision and attention to detail. Learn how to
put a unique spin on your designs.`,
			extraText: 'Register'

		},


	];
	return (
		<>
			<ImageBackground
				imageSrc={heroImage}
				alt='A beautiful landscape background'
				className='md:h-screen h-[100vh]'>
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

			<Image className='w-screen' src={Divider} alt='divider' />

			<div className=''>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full mx-auto md:max-w-[90%] text-center text-[#1A1A1A]'>
					Training Programs
				</h2>
				<p className='font-medium text-center text-base md:text-lg w-[]90% max-w-[40rem] mx-auto'>
					Hands-on learning that bridges creativity and craftsmanship while
					transforming lives and driving growth. Addressing industry shortages
					with comprehensive training.
				</p>
				<SwiperComponent slides={slides} />
			</div>
			<Image className='w-screen' src={Divider} alt='divider' />
			<SharedSection
				header='Apprenticeship training & Non-technical'
				image={Cluster3}
				altText='Winter Collection'
				imageLeft={true}>
				<h3 className='text-start mt-6 font-normal text-base md:text-lg'>
					Learning from Masters of the Craft.
				</h3>
				<div className='max-w-full md:max-w-[90%]'>
					<ul className='list-disc pl-5 my-7 text-start mt-6 font-normal text-base md:text-lg'>
						{[
							'Participants gain practical experience under the guidance of skilled artisans in specialized clusters.',
							'This apprenticeship approach ensures real-world readiness by combining traditional skills with entrepreneurial training.',
							'Certification is provided under the National Skills Qualification Framework (NSQF) to enhance credibility and career prospects.',
						].map((item, index) => (
							<li key={index} className='mb-2'>
								{item}
							</li>
						))}
					</ul>
				</div>
			</SharedSection>
			<Image className='w-screen' src={Divider2} alt='divider' />

			<SharedSection
				header='MSME Cluster and Business Development'
				image={Business}
				altText='Winter Collection'
				imageLeft={false}
				imgHide={true}>
				<h3 className='text-start mt-6 font-normal text-base md:text-lg'>
					Empowering MSMEs to Thrive.
				</h3>
				<div className='max-w-full md:max-w-[90%]'>
					<ul className='list-disc pl-5 my-7 text-start mt-6 font-normal text-base md:text-lg'>
						{[
							'Tailored support for 4,000 MSMEs to improve productivity and sustainability.',
							'Services include access to market trends, infrastructure, and financial management training.',
							'Special focus on empowering women-led businesses',
						].map((item, index) => (
							<li key={index} className='mb-2'>
								{item}
							</li>
						))}
					</ul>
				</div>
			</SharedSection>

			<Image className='w-screen' src={Divider} alt='divider' />

			<SharedSection
				header='Policy Advocacy & Industry Engagement'
				image={policyImg}
				altText='Winter Collection'
				imageLeft={true}>
				<div className='max-w-full md:max-w-[90%]'>
					<p className='text-start mt-6 font-normal text-base md:text-lg'>
						The Fashion Future Program actively advocates for policy reforms and
						initiatives that enhance infrastructure, promote intellectual
						property rights, and improve access to finance and markets.
					</p>
					<p className='text-start mt-6 font-normal text-base md:text-lg'>
						By engaging with government bodies, industry leaders, and
						stakeholders, we champion the needs of MSMEs and foster
						collaborations that drive innovation, inclusivity, and
						sustainability. Our goal is to shape a policy framework that
						empowers fashion entrepreneurs and positions the Nigerian fashion
						industry for global competitiveness.
					</p>
				</div>
			</SharedSection>

			<Image className='w-screen' src={Divider} alt='divider' />

			<div className="h-screen bg-[url('/IMG_5626-min.jpg')] bg-fixed bg-cover bg-center"></div>

			<Image className='w-screen' src={Divider} alt='divider' />

			<SharedSection
				header='Job Placement Program'
				image={contactImage}
				altText='Winter Collection'
				imageLeft={false}>
				<div className='max-w-full md:max-w-[90%]'>
					<p className='text-start mt-6 font-normal text-base md:text-lg'>
						Our job placement services are designed to connect our graduates
						with reputable employers in the fashion industry, ensuring they step
						into rewarding careers that align with their skills and aspirations.
					</p>
					<p className='text-start mt-6 font-normal text-base md:text-lg'>
						Through partnerships with leading fashion brands, local businesses,
						and industry stakeholders, we create pathways for employment in
						garment making, shoemaking, leatherworks, and more. Whether it&apos;s
						full-time positions, internships, or freelance opportunities, FFP is
						committed to helping our participants achieve professional success
						and contribute meaningfully to the fashion ecosystem.
					</p>
				</div>
			</SharedSection>

			<Image className='w-screen' src={Divider} alt='divider' />

			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={jobImg}
					alt='A beautiful landscape background'
					className='md:h-[85vh]'>
					<div className='text-white text-center px-4 py-8'>
						<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%]'>
							Why It Matters
						</h2>
						<p className='mb-10 text-base md:text-lg font-normal'>
							Transforming Lives, Driving Growth.
						</p>
						<p className='font-normal  my-10 text-base md:text-lg md:max-w-[30rem] md:mx-auto'>
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
			<Image className='w-screen' src={Divider} alt='divider' />
		</>
	);
};

export default index;
