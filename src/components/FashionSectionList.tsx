import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './ui/Button';

interface FashionSectionProps {
	header: string;
	subHeader?: string;
	description: string[]; 
	image: StaticImageData;
	image2?:  StaticImageData;
	altText: string;
	imageLeft?: boolean;
	des1?: string,

}

const FashionSectionList: React.FC<FashionSectionProps> = ({
	header,
	subHeader,
	description,
	image,
	altText,
	imageLeft = false,
	des1,
	image2,
}) => {
	return (
		<div className='flex lg:flex-row flex-col py-5 gap-y-6 text-center h-full lg:h-[85vh] bg-white border border-[red]'>
			{/* Image Section */}
			{imageLeft && (
				<div className='flex justify-center items-center p-0 relative'>
					<Image
						src={image}
						alt={altText}
						fill
						className='w-full h-full object-cover'
					/>
				</div>
			)}

			{/* Content Section */}
			<div className='flex flex-col gap-4 justify-center items-center bg-white p-6 md:p-10'>
				<div className='flex justify-between items-center'>
					<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A]'>
						{header}
					</h2>
					<div>
						{image2 && (
							<div className='relative w-24 h-24'>
								<Image
									src={image2}
									alt={altText}
									fill
									className='object-contain'
								/>
							</div>
						)}
					</div>
				</div>

				{subHeader && (
					<div className='text-base sm:text-lg md:text-base text-start max-w-full md:max-w-[80%] xl:max-w-[75%]  md:mb-5'>
						{subHeader}
					</div>
				)}
				{des1 && (
					<div className='text-start font-medium text-base md:text-lg '>
						{des1}
					</div>
				)}
				<div className='max-w-full md:max-w-[90%]'>
					<ul className='list-disc pl-5 my-7 text-start mt-6 font-normal text-base md:text-lg'>
						{description.map((item, index) => (
							<li key={index} className='mb-2'>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Image Section (if imageLeft is false) */}
			{!imageLeft && (
				<div className='flex justify-center items-center p-0 relative'>
					<Image
						src={image}
						alt={altText}
						fill
						className='w-full h-full object-cover'
					/>
				</div>
			)}
		</div>
	);
};

export default FashionSectionList;
