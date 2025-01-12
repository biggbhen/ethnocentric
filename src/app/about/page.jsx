"use client"
import React from 'react'
import Ourvision from '../../assets/ourvision.png'
import Domore from '../../assets/domore.png';
import Whoarewe from '../../assets/whoarewe.png';
import approach from '../../assets/ourapproach.png';
import contact from '../../assets/contactImage.jpg';
import masterMain from '../../assets/masterPicture.png';
import masterIcon from '../../assets/MasterCard.png';
import about from '../../assets/aboute.png';
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
import Last from '../components/Last';
import FashionSectionList from '../components/FashionSectionList';

const index = () => {
return (
	<>
		<div className='px-3 md:px-7 container mx-auto'>
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
						className='rounded-tl-lg rounded-br-2xl'
						width={600}
						height={600}
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

	
		<Image src={Divider} className='w-screen' alt='divider' />
		<div className='py-10'>
			<div className='text-[#1A1A1A] font-bold text-center text-3xl mt-8'>
				About Us
			</div>
			<div className='font-normal text-lg sm:text-xl md:text-2xl text-[#1A1A1A] w-full md:w-[60rem] mx-auto my-7 px-4 sm:px-8'>
			Fashion Future Program (FFP) is a pioneering initiative dedicated to shaping the future of the fashion industry by equip young local creatives and entrepreneurs—especially women, men, and persons with disabilities (PWDs)—with the skills, mentorship, and resources needed to succeed and achieve optimum competitiveness in today’s Fashion Industry.. With a strong focus on skill-building, local development, and policy advocacy, we are committed to creating a sustainable and inclusive fashion ecosystem, building a community of skilled professionals who will innovate, contribute, and lead impactful change within local communities.
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

		<Image src={Divider} className='w-screen' alt='divider' />

		{/* our approach */}
		<Last
			 header='Our Vision'
			 description1='To create an inclusive, innovative, and sustainable fashion ecosystem that empowers fashion entrepreneurs to grow and succeed locally and globally.'
			 description2='We envision an inclusive industry where local entrepreneurs are thriving businesses that contribute significantly to local economies, create jobs, and impact global fashion trends'
			 image={approach}
			 altText='Fashion'
			 imageLeft={true}
			
			 primaryButtonText='Join the Program'
			 primaryButtonAction={() => alert('Joining Program')}
			 secondaryButtonText='Learn About Us'
			 secondaryButtonAction={() => alert('Discovering More')}
			
			/>
		

		<Image className='w-screen' src={Divider} alt='divider' />

			<FashionSectionList
				header='Business Development Support'
			  des1='The Fashion Future Program is proud to partner with the Mastercard Foundation, a visionary organization dedicated to creating dignified work opportunities for young people across Africa. Through their support, we have:'
				description={[
					'Trained over 5,000 youth in garment making, footwear, and leatherworks',
					'Support 4,000 MSMEs with business development services',
					'Advocate for inclusive policies that empower women and people with disabilities.',
				]}
				image={masterMain}
				image2={masterIcon}
				altText='Winter Collection'
				imageLeft={false}
				primaryButtonText='Discover More'
				primaryButtonAction={() => console.log('Shop Now clicked')}
				secondaryButtonText='Join the Program'
				secondaryButtonAction={() => console.log('Learn More clicked')}
			/>

			<Image className='w-screen' src={Divider} alt='divider' />
		<FashionSection
			header='	About Ethnocentrique'
			description = "Ethnocentrique is a pioneering company dedicated to showcasing African excellence in fashion, art, and culture. We promote local talents and creatives, fostering sustainable growth opportunities. Our work celebrates Africa's rich cultural heritage and supports local production, empowering individuals and communities."
			image={about}
			altText='Fashion'
			imageLeft={true}
			primaryButtonText='Join the Program'
			primaryButtonAction={() => alert('Joining Program')}
			secondaryButtonText='Discover More'
			secondaryButtonAction={() => alert('Discovering More')}
		/>

		<Image className='w-screen' src={Divider} alt='divider' />

		<div>
			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={contact}
					alt='A beautiful landscape background'
					className='md:h-screen h-[70vh]'>
					<div className='text-white text-center px-4 py-8'>
						<h1 className='text-3xl font-medium mb-3 md:text-5xl lg:text-5xl'>
						Contact Us
						</h1>

						<p className='text-xl font-normal  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Address: 4, Prince Akingbade Close, Off Muri Okunola Close,
							Victoria Island, Lagos State.
						</p>

						<p className='text-xl  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
							Phone Number: +234 803 050 7007
						</p>

						<p className='text-xl  my-10 md:text-xl md:max-w-[30rem] md:mx-auto'>
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
		<Image className='w-screen' src={Divider} alt='divider' />
	</>
);
}

export default index