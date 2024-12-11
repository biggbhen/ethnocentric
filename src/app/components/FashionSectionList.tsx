import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './ui/Button';

interface FashionSectionProps {
	header: string;
	subHeader?: string;
	description: string[]; 
	image: StaticImageData;
	altText: string;
	imageLeft?: boolean;
	primaryButtonText: string;
	primaryButtonAction: () => void;
	secondaryButtonText: string;
	secondaryButtonAction: () => void;
}

const FashionSectionList: React.FC<FashionSectionProps> = ({
	header,
	subHeader,
	description,
	image,
	altText,
	imageLeft = false,
	primaryButtonText,
	primaryButtonAction,
	secondaryButtonText,
	secondaryButtonAction,
}) => {
	return (
		<div className='grid p-1 py-5 md:py-0 md:p-0 grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0  text-center h-full bg-white'>
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
			<div className='flex flex-col justify-center bg-white px-6 md:px-10 md:ms-[2rem] xl:ms-[3rem] text-dark-gray'>
				<div className='font-medium text-start text-xl sm:text-2xl md:text-4xl xl:text-5xl max-w-full md:max-w-[80%] xl:max-w-[100%] pt-4 md:py-4'>
					{header}
				</div>
				{subHeader && (
					<div className='text-base sm:text-lg md:text-base text-start max-w-full md:max-w-[80%] xl:max-w-[75%]  md:mb-5'>
						{subHeader}
					</div>
				)}
				<div className='font-normal text-start text-sm sm:text-lg md:text-lg xl:text-2xl max-w-full md:max-w-[90%] xl:max-w-[85%]'>
					<ul className='list-disc pl-5 my-7'>
						{description.map((item, index) => (
							<li key={index} className='mb-2'>
								{item}
							</li>
						))}
					</ul>
					<div className='text-start mt-6'>
						<div className='flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-5'>
							{/* Secondary Button */}
							<Button
								className='text-sm sm:text-base'
								variant='secondary'
								onClick={secondaryButtonAction}>
								{secondaryButtonText}
							</Button>

							{/* Primary Button */}
							<Button
								className='text-sm sm:text-base'
								variant='primary'
								onClick={primaryButtonAction}>
								{primaryButtonText}
							</Button>
						</div>
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

export default FashionSectionList;
