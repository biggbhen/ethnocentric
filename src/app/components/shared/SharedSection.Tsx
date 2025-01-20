import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from '';

interface FashionSectionProps {
	header: string;
	description: string;
	image: StaticImageData;
	altText: string;
	imageLeft?: boolean;
	primaryButtonText: string;
	primaryButtonAction: () => void;
	secondaryButtonText: string;
	secondaryButtonAction: () => void;
}

const FashionSection: React.FC<FashionSectionProps> = ({
	header,
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
			<div className='flex flex-col text-[#1A1A1A] gap-y-10 justify-center items-center bg-white p-6 md:p-10'>
				<div className='font-medium py-4 md:py-7 text-2xl md:text-4xl xl:text-5xl max-w-full md:max-w-[80%] xl:max-w-[75%]'>
					{header}
				</div>
				<div className='font-normal text-start text-base md:text-lg xl:text-xl max-w-full md:max-w-[80%] xl:max-w-[75%]'>
					{description}
					<div className='text-start mt-6'>
						<div className='flex flex-col md:flex-row gap-y-3 lg:gap-y-0 gap-x-5'>
							<Button
								className='text-base'
								variant='secondary'
								onClick={secondaryButtonAction}>
								{secondaryButtonText}
							</Button>
							<Button
								className='text-base'
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

export default FashionSection;
