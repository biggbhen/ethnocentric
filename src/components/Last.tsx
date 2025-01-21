import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './ui/Button'; 

interface FashionSectionProps {
	header: string;
	description1: string;
	description2: string;
	image: StaticImageData; 
	altText: string;
	imageLeft?: boolean;
	primaryButtonText: string;
	primaryButtonAction: () => void;
	secondaryButtonText: string;
	secondaryButtonAction: () => void;
    subHeader1?: string;
    subHeader2?: string;
}

const Last: React.FC<FashionSectionProps> = ({
	header,
	description1,
	description2,
	image,
	altText,
	imageLeft = false,
    subHeader1,
    subHeader2

}) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 text-center h-full bg-white'>
			{/* Image Section */}
			{imageLeft && (
				<div className='flex justify-center items-center p-4 md:p-0'>
					<Image
						src={image}
						alt={altText}
						layout='responsive'
						width={600}
						height={400}
						objectFit='contain'
					/>
				</div>
			)}

			{/* Content Section */}
			<div className='flex flex-col gap-y-1 justify-center items-center bg-white p-6 md:p-10'>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%]'>
					{header}
				</h2>
				<div className='font-normal text-start text-base md:text-lg xl:text-2xl max-w-full md:max-w-[80%]'>
					{subHeader1 && (
						<h4 className='font-medium text-start text-base md:text-lg xl:text-xl text-[#FFA929]'>
							{subHeader1}
						</h4>
					)}
					<p className='text-start font-normal text-base'>
						{description1}
					</p>

					<div className='font-normal mt-5 text-start text-base md:text-lg xl:text-2xl max-w-full md:max-w-[80%]'>
						{subHeader2 && (
							<h4 className='font-medium text-start text-base md:text-lg xl:text-xl text-[#FFA929]'>
								{subHeader2}
							</h4>
						)}
						<p className='text-start font-normal text-base'>
							{description2}
						</p>
					</div>
				</div>
			</div>

			{/* Image Section (if imageLeft is false) */}
			{!imageLeft && (
				<div className='flex justify-center items-center p-4 md:p-0'>
					<Image
						src={image}
						alt={altText}
						layout='responsive'
						width={600}
						height={400}
						objectFit='contain'
					/>
				</div>
			)}
		</div>
	);
};

export default Last;
