'use client';
import React from 'react';
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
			<ImageBackground
				imageSrc={Cluster1}
				Imageclass='filter brightness-50'
				alt='A beautiful landscape background'
				className='h-[90vh] lg:h-screen'>
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

			<Image className='w-screen' src={Divider} alt='divider' />

			<div className='flex flex-col gap-y-1 justify-center items-center bg-white p-6 md:p-10'>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A]'>
				OUR Goals
				</h2>
				<div className='max-w-full md:max-w-[90%]'>The pilot phase of the program is for two years (May 2024- May 2026) in the city of Aba with the following goals</div>
			</div>

			<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:p-10 justify-center">
    <div className=" lg:px-4 mb-4">
      <Card imageSrc={FFP} title="5,000+" des='Youth Participants trained in garment making, shoemaking, and leatherwork.
' />
    </div>
    <div className=" lg:px-4 mb-4">
      <Card imageSrc={FFP} title="4,000 " des='MSMEs supported with business development, Access to Market and Finance.
' />
    </div>
    <div className=" lg:px-4 mb-4">
      <Card imageSrc={FFP} title="3"  des='Major Clusters in Abia State driving regional economic growth.' />
    </div>
   
  
  </div>
  <div className='md:flex w-full gap-x-3 justify-center'>
  <div className="md:px-2 lg:px-4 mb-4 w-full">
      <Card imageSrc={FFP} title="1,000+ " des=' Mastercraft Persons empowered to mentor young talents.' />
    </div>
    <div className="md:px-2 lg:px-4 mb-4 w-full">
      <Card imageSrc={FFP} title="30% " des='Growth in Market Linkages for youth and MSMEs.' />
    </div>
  </div>
</div>

			{/* update main */}
			<Image className='w-screen' src={Divider} alt='divider' />
			<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:p-10 lg:pb-0 justify-center">
    <div className=" lg:px-4 mb-4">
	<CardNoImage color='#FFA929' title='2146' des='Youth Participants Trained in Aba' />
    </div>
    <div className=" lg:px-4 mb-4">
	<CardNoImage color='#E86025' title='2000' des='MSMEs being supported with business development services' />
    </div>
    <div className=" lg:px-4 mb-4">
	<CardNoImage color='#FFA929' title='25' des='Fashion Clusters' />
    </div>
    <div className=" lg:px-4 mb-4">
	<CardNoImage color='#E86025' title='426' des='Mastercraft persons sharing knowledge' />
    </div>
    <div className=" lg:px-4 mb-4">
	<CardNoImage color='#FFA929' title='80%' des='Youth female inclusion' />
    </div>
    <div className=" lg:px-4 mb-4">
	<CardNoImage color='#E86025' title='70.5% ' des='Female owned MSMEs' />
    </div>
  </div>
</div>
<div>

</div>

<Button
							className='text-sm px-6 py-2 mb-5 mx-auto  md:text-base md:px-8 md:py-3'
							variant='primary'>
							Support Our Programs
						</Button>
      
		
			<Image className='w-screen' src={Divider} alt='divider' />
			<SharedSection
				header='Why Aba?'
				image={Cluster2}
				altText='Winter Collection'
				imageLeft={false}>
				<h3 className='text-start mt-6 font-normal text-base md:text-lg'>
					Empowering MSMEs to Thrive.
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
			</SharedSection>

			<Image className=' w-screen' src={Divider} alt='divider' />

			<div>
				<ImageBackground
					Imageclass='filter brightness-50 '
					imageSrc={approach}
					alt='A beautiful landscape background'
					className='md:h-[85vh]'>
					<div className='text-white text-center px-4 py-8'>
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
								variant='primary'>
								Join the Program
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
