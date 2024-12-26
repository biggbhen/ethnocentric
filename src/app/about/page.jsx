"use client"
import React from 'react'
import Ourvision from '../../assets/ourvision.svg'
import Domore from '../../assets/domore.svg';
import Whoarewe from '../../assets/whoarewe.svg';
import approach from '../../assets/ourapproach.svg';
import contact from '../../assets/contactImage.jpeg';
import about from '../../assets/about.svg';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Divider from '../../assets/divider.svg'
import FashionSection from '../components/FashionSectionFashionSection';
import ImageBackground from '../components/ImageBackground';
import { IoMailOutline } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { PiTwitterLogo } from 'react-icons/pi';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { SlSocialLinkedin } from 'react-icons/sl';

const index = () => {
return (
	<>
		<div className='px-3 md:px-7'>
			<div className='text-[#FFA929] font-bold text-[6rem] md:text-[13rem]'>
				About
			</div>
			<div className='flex flex-col md:flex-row justify-between items-start'>
				{/* "US" Text */}
				<div className='text-[#FFA929] font-bold text-[5rem] md:text-[10rem] leading-none'>
					US
				</div>

				{/* First Image */}
				<div className='my-5 md:my-0'>
					<Image
						src={Domore}
						alt='Our vision'
						className='rounded-tl-lg rounded-br-lg hover:scale-105 transition-transform duration-300'
						width={500}
						height={500}
					/>
					<div className='flex justify-end md:my-20 my-10 flex-row gap-y-3 md:gap-y-0 gap-x-5'>
						<span>
							<Button className='text-sm md:text-base' variant='secondary'>
								Discover More
							</Button>
						</span>
						<span>
							<Button className='text-sm md:text-base' variant='primary'>
								Join the Program
							</Button>
						</span>
					</div>
				</div>

				{/* Second Image and Content */}
				<div className='text-[#1A1A1A] max-w-[20rem] md:max-w-[23rem]'>
					<Image
						src={Ourvision}
						alt='Our vision'
						className='rounded-tl-lg rounded-br-lg'
					/>
					<div></div>
					<div className='font-bold text-xl md:text-2xl my-4'>Our Vision</div>
					<div className='font-normal text-sm md:text-base mb-8 md:mb-0'>
						A vibrant and inclusive fashion industry where creativity
						flourishes, businesses thrive, and talent transforms communities.
					</div>
				</div>
			</div>
		</div>

		<Image src={Divider} alt='divider' />

		<div className='py-10'>
			<div className='text-[#1A1A1A] font-bold text-center text-3xl mt-8'>
				Who We Are
			</div>
			<div className='font-normal text-lg sm:text-xl md:text-2xl text-[#1A1A1A] w-full md:w-[60rem] mx-auto my-7 px-4 sm:px-8'>
				The Fashion Future Program (FFP) is a transformative initiative designed
				to empower young fashion entrepreneurs and artisans. Through a
				combination of hands-on training, business development services, and
				inclusive opportunities, we equip young creatives with the skills and
				resources they need to excel in the global fashion industry. Our goal is
				to spark innovation, foster economic growth, and position Nigeria’s
				fashion industry as a global powerhouse.
			</div>
			<div className='w-full md:w-[80rem] h-full mx-auto px-4 sm:px-8'>
				<Image
					src={Whoarewe}
					alt='Our vision'
					className='rounded-tl-lg rounded-br-lg w-full'
				/>
				<div className='flex justify-center my-10 sm:my-20'>
					<Button className='text-sm sm:text-base' variant='primary'>
						Discover Our Programs
					</Button>
				</div>
			</div>
		</div>

		<Image src={Divider} alt='divider' />

		{/* our approach */}
		<div>
			<div className='grid md:grid-cols-2 md:px-10 md:gap-x-[2rem] text-[#1A1A1A] '>
				{/* First column */}
				<div className='md:flex md:flex-col  gap-y-[2rem] md:px-10 px-5 my-[5rem] max-w-[38rem]'>
					<div className='my-2'>
						<h2 className='text-4xl font-bold mb-3 text-[#1A1A1A]'>
							LEARNING FROM MASTERS
						</h2>
						<p className='font-normal max-w-[34rem]'>
							Practical training under seasoned artisans ensures participants
							develop real-world skills.
						</p>
					</div>
					<div className='my-2'>
						<h2 className='text-4xl font-bold text-[#1A1A1A] mb-3'>
							ENTREPRENEURIAL FOCUS
						</h2>
						<p className='font-normal max-w-[34rem]'>
							Exposure to market trends and business operations prepares
							participants for careers or ventures in fashion.
						</p>
					</div>
					<div className='my-2'>
						<h2 className='text-4xl font-bold text-[#1A1A1A] mb-3'>
							BUILDING THE SKILLS GAP
						</h2>
						<p className='font-normal max-w-[34rem]'>
							Standardized training ensures certifications meet global industry
							standards.
						</p>
					</div>
					<div className='my-2'>
						<h2 className='text-4xl font-bold text-[#1A1A1A] mb-3'>
							CULTURE MEETS INNOVATION
						</h2>
						<p className='font-normal max-w-[34rem]'>
							We honor traditional craftsmanship while embracing modern design.
						</p>
					</div>
				</div>

				{/* Second column */}
				<div className='px-10 my-[2rem]'>
					<div className='md:text-end text-center'>
						<h2 className='text-4xl font-bold text-[#1A1A1A] mb-3'>
							Our Approach
						</h2>
						<p className='font-normal md:text-end text-center my-3'>
							We use a hands-on mentorship and apprenticeship model, delivered
							within specialized clusters. This approach blends traditional
							craftsmanship with modern techniques to create well-rounded,
							industry-ready professionals.
						</p>
					</div>
					<div className='flex justify-end'>
						<Image
							src={approach}
							alt='Our vision'
							className='rounded-tl-lg rounded-br-lg'
						/>
					</div>
				</div>
			</div>
		</div>
		<Image src={Divider} alt='divider' />
		<FashionSection
			header='	About Ethnocentrique'
			description='The driving force behind FFP, Ethnocentrique Ltd., is a pioneer in
				celebrating African fashion, art, and culture. Since 2004,
				Ethnocentrique has championed sustainable growth by showcasing
				local talent, preserving traditional skills, and redefining
				African fashion globally.'
			image={about}
			altText='Fashion'
			imageLeft={true}
			primaryButtonText='Join the Program'
			primaryButtonAction={() => alert('Joining Program')}
			secondaryButtonText='Discover More'
			secondaryButtonAction={() => alert('Discovering More')}
		/>

		<Image src={Divider} alt='divider' />

		<div>
			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={contact}
					alt='A beautiful landscape background'
					className='md:h-screen h-[70vh]'>
					<div className='text-white text-center px-4 py-8'>
						<h1 className='text-4xl font-medium mb-3 md:text-5xl lg:text-5xl'>
							Why It Matters
						</h1>

						<p className='text-2xl font-normal  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Address: 4, Prince Akingbade Close, Off Muri Okunola Close,
							Victoria Island, Lagos State.
						</p>

						<p className='text-2xl  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Phone Number: +234 803 050 7007
						</p>

						<p className='text-2xl  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Email:{' '}
							<a
								href='mailto:info@ethnocentrique.com'
								className='underline text-[#FFA929]'>
								info@ethnocentrique.com
							</a>
						</p>
						<div
							className=' flex justify-center gap-x-3  my-10 md:text-xl md:max-w-[30rem] md:mx-auto
							
							'>
							<span>
								<IoMailOutline
									className='hover:text-[#FFA929]  cursor-pointer '
									size={25}
								/>
							</span>
							<span>
								<AiOutlineInstagram
									className='hover:text-[#FFA929]  cursor-pointer'
									size={25}
								/>
							</span>
							<span>
								<PiTwitterLogo
									className='hover:text-[#FFA929]  cursor-pointer'
									size={25}
								/>
							</span>
							<span>
								<RiFacebookBoxLine
									className='hover:text-[#FFA929]  cursor-pointer'
									size={25}
								/>
							</span>
							<span>
								<SlSocialLinkedin
									className='hover:text-[#FFA929]  cursor-pointer'
									size={23}
								/>
							</span>
						</div>
					</div>
				</ImageBackground>
			</div>
		</div>
		<Image src={Divider} alt='divider' />
	</>
);
}

export default index