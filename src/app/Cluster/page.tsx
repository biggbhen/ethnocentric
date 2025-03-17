'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Cluster2 from '@/assets/aba.jpg';
import approach from '@/assets/ourapproach.png';
import Cluster4 from '@/assets/cluster4.jpg';
import Cluster1 from '@/assets/cluster1.jpg';
import Image from 'next/image';
import Divider from '@/assets/divider.svg';
import FFP from '@/assets/FFP.png';
import Divider2 from '@/assets/divider2.svg';
import SharedSection from '@/components/shared/SharedSection';
import ImageBackground from '@/components/ImageBackground';
import Button from '@/components/ui/Button';
import Card from '@/components/Card';
import CardNoImage from '@/components/CardNoImage';

const index = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>

				<ImageBackground
					imageSrc={Cluster1}
					Imageclass='filter brightness-50'
					alt='A beautiful landscape background'
					className='h-[90vh] lg:h-screen'>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className='text-white text-center px-4 py-8 md:max-w-[50rem]'>
						<motion.h1
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className='text-3xl font-medium mb-4 md:text-4xl lg:text-5xl'>
							Transforming Aba into Africa’s Creative Powerhouse
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.7 }}
							className='text-lg mb-8 md:text-xl md:mx-auto'>
							Explore our comprehensive programs designed to empower aspiring
							fashion professionals with the skills, resources, and mentorship
							needed to thrive in the industry.
						</motion.p>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5, delay: 1 }}
							className='flex justify-center'>
							<Button
								className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
								variant='primary'
								onClick={() =>
									window.open(
										'https://registration.fashionfutureprogram.org',
										'_blank',
										'noopener,noreferrer'
									)
								}>
								Join the Program
							</Button>
						</motion.div>
					</motion.div>
				</ImageBackground>
			</motion.div>

			<Image className='w-screen' src={Divider} alt='divider' />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='flex flex-col justify-center items-center max-w-[90%] mx-auto'>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl text-[#1A1A1A]'>
					OUR Goals
				</h2>
				<p className='font-normal text-base md:text-lg mx-auto text-center max-w-[40rem]'>
					The pilot phase of the program is for two years (May 2024- May 2026)
					in the city of Aba with the following goals
				</p>
			</motion.div>

			<div className='container my-12 max-w-[90%] mx-auto'>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
					}}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
					<motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}

					>
						<Card
							imageSrc={FFP}
							title='5,000+'
							des='Youth Participants trained in garment making, shoemaking, and leatherwork.'
						/>
					</motion.div>
					<motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} >
						<Card
							imageSrc={FFP}
							title='4,000 '
							des='MSMEs supported with business development, Access to Market and Finance.'
						/>
					</motion.div>
					<motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} >
						<Card
							imageSrc={FFP}
							title='3'
							des='Major Clusters in Abia State driving regional economic growth.'
						/>
					</motion.div>
					<motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} >
						<Card
							imageSrc={FFP}
							title='1,000+ '
							des=' Mastercraft Persons empowered to mentor young talents.'
						/>
					</motion.div>
					<motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} >
						<Card
							imageSrc={FFP}
							title='30% '
							des='Growth in Market Linkages for youth and MSMEs.'
						/>
					</motion.div>
				</motion.div>
			</div>

			{/* update main */}
			<Image className='w-screen' src={Divider} alt='divider' />
			<div className='container mx-auto p-4'>
				<div
					className='flex flex-col justify-center items-center max-w-[90%] mx-auto'>
					<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl text-[#1A1A1A]'>
						Numbers So Far
					</h2>
					<p className='font-normal text-base md:text-lg mx-auto text-center max-w-[40rem]'>
						Impact of our activities from August 2024 - December 2024
					</p>
				</div>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-[90%] sm:w-[70%] mx-auto my-10'>
					<CardNoImage
						color='#FFA929'
						number={2146}
						des='Youth Participants Trained in Aba'
					/>
					<CardNoImage
						color='#E86025'
						number={2000}
						des='MSMEs being supported with business development services'
					/>
					<CardNoImage color='#FFA929' number={25} des='Fashion Clusters' />
					<CardNoImage
						color='#E86025'
						number={426}
						des='Mastercraft persons sharing knowledge'
					/>
					<CardNoImage
						color='#FFA929'
						number={80}
						des='Youth female inclusion'
						percent
					/>
					<CardNoImage color='#E86025' percent number={70.5} des='Female owned MSMEs' />
				</div>
			</div>

			<Button
				className='text-sm px-6 py-2 mx-auto  md:text-base md:px-8 md:py-3 mb-10'
				variant='primary'
				onClick={() =>
					window.open(
						'https://forms.office.com/r/iaG8KK9mec',
						'_blank',
						'noopener,noreferrer'
					)
				}>
				Support Our Programs
			</Button>

			<Image className='w-screen' src={Divider} alt='divider' />
			<SharedSection
				header='Why Aba?'
				image={Cluster2}
				altText='Winter Collection'
				imageLeft={false}>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h3 className='text-start mt-6 font-normal text-base md:text-lg'>
						Building a sustainable local economy.
					</h3>
					<div className='max-w-full md:max-w-[90%]'>
						<ul className='list-disc pl-5 my-7 text-start mt-6 font-normal text-base md:text-lg'>
							{[
								'Aba is the heart of Nigeria’s fashion and textile industry, home to skilled artisans and a rich history of craftsmanship.',
								'The Fashion Future Program focuses on enhancing Aba’s potential by investing in its people, businesses, and infrastructure.',
							].map((item, index) => (
								<li key={index} className='mb-2'>
									{item}
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			</SharedSection>
			<Image className=' w-screen' src={Divider2} alt='divider' />

			{/* <Image className='w-screen' src={Divider} alt='divider' />

			<div className='my-[5rem]'>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark-gray text-center my-4 md:my-6 lg:my-8">
					Training Programs
				</h1>
				<p className="text-center text-dark-gray text-base md:text-lg lg:text-2xl max-w-[90%] md:max-w-[40rem] my-4 md:my-5 lg:my-6 mx-auto">
					Hands-on learning that bridges creativity and craftsmanship while transforming lives and driving growth. Addressing industry shortages with comprehensive training.
				</p>


				<SwiperComponent slides={slides} />


			</div> */}
			{/* <Image className='w-screen' src={Divider} alt='divider' /> */}
			<SharedSection
				header='The Future of Aba’s Clusters'
				image={Cluster4}
				altText='Winter Collection'
				imgHide={true}
				imageLeft={true}>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h3 className='text-start mt-6 font-normal text-base md:text-lg'>
						What’s Next?
					</h3>
					<div className='max-w-full md:max-w-[90%]'>
						<ul className='list-disc pl-5 my-7 text-start mt-6 font-normal text-base md:text-lg'>
							{[
								'Scaling the model to other regions.',
								'Introducing advanced training modules in sustainable fashion practices.',
								'Expanding global partnerships to open more market opportunities. ',
							].map((item, index) => (
								<li key={index} className='mb-2'>
									{item}
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			</SharedSection>

			<Image className=' w-screen' src={Divider} alt='divider' />

			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={approach}
					alt='A beautiful landscape background'
					className='md:h-[85vh]'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.2 }}
						className='text-white text-center px-4 py-8'>
						<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%]'>
							Be Part of the Transformation
						</h2>
						<p className='mb-10 text-base md:text-lg font-normal max-w-full md:max-w-[35rem]'>
							Whether you’re a policymaker, investor, or creative, there’s a
							role for everyone in shaping the future of Aba’s fashion industry.
						</p>
						<div className='flex justify-center'>
							<Button
								className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
								variant='primary'
								onClick={() =>
									window.open(
										'https://registration.fashionfutureprogram.org',
										'_blank',
										'noopener,noreferrer'
									)
								}>
								Join the Program
							</Button>
						</div>
					</motion.div>
				</ImageBackground>
			</div>
			<Image className=' w-screen' src={Divider} alt='divider' />
		</>
	);
};

export default index;
