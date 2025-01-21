"use client"
import React from 'react'
import Ourvision from '../../assets/ourvision.png'
import Domore from '../../assets/domore.png';
import Whoarewe from '../../assets/whoarewe.png';
import approach from '../../assets/ourapproach.png';
import contact from '../../assets/contactImage.jpg';
import masterMain from '../../assets/masterPicture.png';
import masterIcon from '../../assets/MasterCard.png';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Divider from '../../assets/divider.svg'
import ImageBackground from '../components/ImageBackground';
import { IoMailOutline } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { PiTwitterLogo } from 'react-icons/pi';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { SlSocialLinkedin } from 'react-icons/sl';
import SharedSection from '@/components/shared/SharedSection';

const index = () => {
return (
	<div className='w-full'>
		<div className='px-3 md:px-7 py-10 container mx-auto'>
			<div className='text-[#FFA929] font-bold text-[5rem] sm:text-[8rem] md:text-[10rem]'>
				About
			</div>
			<div className='flex flex-col md:flex-row justify-between gap-x-6'>
				{/* "US" Text */}
				<div className='text-[#FFA929] font-bold text-[5rem] sm:text-[8rem] md:text-[10rem] leading-none'>
					US
				</div>

				{/* First Image */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<Image
						src={Domore}
						alt='Our vision'
						className='rounded-tl-[56px] rounded-br-[56px] w-full h-full object-cover row-span-2'
					/>
					<Image
						src={Ourvision}
						alt='Our vision'
						className='rounded-tl-lg hidden sm:block rounded-br-lg w-full h-full object-cover row-span-1'
					/>
					<Image
						src={Ourvision}
						alt='Our vision'
						className='rounded-tl-lg hidden sm:block rounded-br-lg w-full h-full object-cover row-span-1'
					/>
				</div>
			</div>
		</div>

		<Image src={Divider} className='w-screen' alt='divider' />
		<div className='py-10'>
			<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A] text-center '>
				About Us
			</h2>
			<div className=' text-[#1A1A1A] w-full md:w-[60rem] mx-auto my-7 px-4 sm:px-8 text-start mt-6 font-normal text-base md:text-lg'>
				Fashion Future Program (FFP) is a pioneering initiative dedicated to
				shaping the future of the fashion industry by equip young local
				creatives and entrepreneurs—especially women, men, and persons with
				disabilities (PWDs)—with the skills, mentorship, and resources needed to
				succeed and achieve optimum competitiveness in today’s Fashion
				Industry.. With a strong focus on skill-building, local development, and
				policy advocacy, we are committed to creating a sustainable and
				inclusive fashion ecosystem, building a community of skilled
				professionals who will innovate, contribute, and lead impactful change
				within local communities.
			</div>
			<div className='w-full md:w-[90%] mx-auto px-4 sm:px-8'>
				<Image
					src={Whoarewe}
					alt='Our vision'
					className='rounded-tl-[32px] rounded-br-[32px] w-full h-[300px] object-cover'
				/>
			</div>
		</div>
		<Image src={Divider} className='w-screen ' alt='divider' />

		{/* our vision */}

		<SharedSection
			header='Our Vision'
			image={approach}
			altText='Fashion'
			imageLeft={true}

		>
			<p className='text-start mt-6 font-normal text-base md:text-lg'>
				We envision an inclusive industry where local entrepreneurs are thriving
				businesses that contribute significantly to local economies, create
				jobs, and impact global fashion trends
			</p>
			<p className='text-start mt-6 font-normal text-base md:text-lg'>
				We envision an inclusive industry where local entrepreneurs are thriving
				businesses that contribute significantly to local economies, create
				jobs, and impact global fashion trends
			</p>
		</SharedSection>

		<Image className='w-screen' src={Divider} alt='divider' />

		<div className='flex flex-col gap-4 bg-white p-6 md:p-10'>
			<div className='flex justify-center gap-4'>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A]'>
					About Ethnocentrique
				</h2>
			</div>

			<div className='w-full md:w-[90%] mx-auto'>
				<p className='text-start mt-4 font-normal text-base md:text-lg'>
					In our vision to be the{' '}
					<span className='font-semibold'>
						backbone of the African creative industry in dedicated to preserving
						Africa’s creative excellence
					</span>
					, we connect and support local creatives and MSMEs (Micro, Small, and
					Medium Enterprises) to access opportunities that enhance their global
					competitiveness.
				</p>
				<p className='text-start mt-4 font-semibold text-base md:text-lg'>
					What we do entails:
				</p>
				<p className='text-start mt-4 font-normal text-base md:text-lg'>
					<span className='font-semibold'>
						Business Development Support Services:
					</span>{' '}
					Assisting MSMEs in accessing funding, markets, and resources to scale
					their businesses.
				</p>
				<p className='text-start mt-4 font-normal text-base md:text-lg'>
					<span className='font-semibold'>Market Access Facilitation:</span> We
					provide local creatives and businesses with the tools and support
					needed to access new markets, both locally and internationally
				</p>
				<p className='text-start mt-4 font-normal text-base md:text-lg'>
					<span className='font-semibold'> Skills Development:</span>{' '}
					Implementing upskilling programs and standardization initiatives to
					enhance the capabilities of local creatives and MSMEs.
				</p>
				<p className='text-start mt-4 font-normal text-base md:text-lg'>
					<span className='font-semibold'>
						{' '}
						Partnerships and Collaborations:{' '}
					</span>{' '}
					Strategic Providing strategic guidance and partnership opportunities
					to enhance operational efficiency for SMEs, to open new markets and
					growth avenues..
				</p>
				<p className='text-start mt-4 font-normal text-base md:text-lg'>
					In Summary, we reshape Africa’s creative Future by connecting local
					artisans to global markets, enhancing productivity, and showcasing
					African creative excellence
				</p>
			</div>

			<div className='w-max mx-auto my-6'>
				<Button className='text-sm md:text-base w-[250px]' variant='primary'>
					Learn More
				</Button>
			</div>
		</div>

		<Image className='w-screen' src={Divider} alt='divider' />

		<div className='flex flex-col gap-4 bg-white'>
			<div className='flex lg:min-h-screen'>
				<div className='w-full lg:md:w-1/2 p-6 md:p-10 flex flex-col justify-center'>
					<div className='flex justify-center gap-4'>
						<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A]'>
							About Mastercard Foundation
						</h2>
						<div className='relative w-24 h-24'>
							<Image
								src={masterIcon}
								alt={'Winter Collection'}
								fill
								className='object-contain'
							/>
						</div>
					</div>
					<div className='w-full md:w-[90%] mx-auto'>
						<p className='text-start mt-4 font-normal text-base md:text-lg'>
							The Mastercard Foundation works with visionary organizations to
							enable young people in Africa and in Indigenous communities in
							Canada to access dignified and fulfilling work.
						</p>
						<p className='text-start mt-4 font-normal text-base md:text-lg'>
							We want a world where young people are included and are thriving
							and their leadership and contributions matter. A future where
							young people are driving transformative change and achieving their
							full potential. We bring together the private sector, donors,
							young people, and civil society – to create effective systems and
							infrastructures, supportive policies, and an environment where
							young people can find work and entrepreneurs and small enterprises
							can succeed and grow.
						</p>
						<p className='text-start mt-4 font-normal text-base md:text-lg'>
							A world where everyone has the opportunity to learn and prosper.
						</p>
					</div>
					<div className='w-max mx-auto my-6'>
						<Button
							className='text-sm md:text-base w-[250px]'
							variant='primary'>
							Learn More
						</Button>
					</div>
				</div>
				<div className='relative hidden w-full md:w-1/2 lg:block'>
					<Image
						src={masterMain}
						alt={'Winter Collection'}
						className='object-cover'
						fill
					/>
				</div>
			</div>
		</div>

		{/* <Image className='w-screen' src={Divider} alt='divider' /> */}

		{/* <div className='flex flex-col gap-4 bg-white p-6 md:p-10'>
			<div className='flex justify-center gap-4'>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A]'>
					Business Development Support
				</h2>
				<div className='relative w-24 h-24'>
					<Image
						src={masterIcon}
						alt={'Winter Collection'}
						fill
						className='object-contain'
					/>
				</div>
			</div>

			<div className='w-full md:w-[90%] mx-auto'>
				<p className='text-start font-normal text-base md:text-lg'>
					The Mastercard Foundation works with visionary organizations to enable
					young people in Africa and in Indigenous communities in Canada to
					access dignified and fulfilling work. We want a world where young
					people are included and are thriving and their leadership and
					contributions matter.
				</p>
				<p className='text-start mt-6 font-normal text-base md:text-lg'>
					A future where young people are driving transformative change and
					achieving their full potential. We bring together the private sector,
					donors, young people, and civil society – to create effective systems
					and infrastructures, supportive policies, and an environment where
					young people can find work and entrepreneurs and small enterprises can
					succeed and grow. A world where everyone has the opportunity to learn
					and prosper.
				</p>
			</div>

			<div className='w-full md:w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-x-8 mt-8'>
				<div>
					<p className='text-start mt-6 font-semibold text-base md:text-lg'>
						Through their support, we have:
					</p>
					<ul className='list-disc pl-5 my-7 text-start mt-6 font-normal text-base md:text-lg'>
						{[
							'Trained over 5,000 youth in garment making, footwear, and leatherworks',
							'Supported 4,000 MSMEs with business development services',
							'Advocate for inclusive policies that empower women and people with disabilities.',
						].map((item, index) => (
							<li key={index} className='mb-2'>
								{item}
							</li>
						))}
					</ul>
					<div className='w-max mx-auto my-6'>
						<Button
							className='text-sm md:text-base w-[250px]'
							variant='primary'>
							Learn More
						</Button>
					</div>
				</div>
				<div className='relative max-w-[600px] w-[90%] h-[500px]'>
					<Image
						src={masterMain}
						alt={'Winter Collection'}
						className='object-cover rounded-tl-[52px] rounded-br-[52px]'
						fill
					/>
				</div>
			</div>
		</div> */}

		<Image className='w-screen' src={Divider} alt='divider' />

		<div>
			<ImageBackground
				Imageclass='filter brightness-50 '
				imageSrc={contact}
				alt='A beautiful landscape background'
				className='md:h-[85vh]'>
				<div className='text-white text-center px-4 py-8 max-w-full md:max-w-[35rem]'>
					<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%]'>
						Contact Us
					</h2>
					<p className='mb-10 text-base md:text-lg font-normal'>
						Address: 4, Prince Akingbade Close, Off Muri Okunola Close, Victoria
						Island, Lagos State.
					</p>
					<p className='mb-10 text-base md:text-lg font-normal'>
						Phone Number: +234 803 050 7007
					</p>
					<p className='mb-10 text-base md:text-lg font-normal'>
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
		<Image className='w-screen' src={Divider} alt='divider' />
	</div>
);
}

export default index