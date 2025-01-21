import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface SharedSectionProps {
	header: string;
	image: StaticImageData;
	altText: string;
	imageLeft?: boolean;
	children: ReactNode
	imgHide?: boolean;
}


const SharedSection: React.FC<SharedSectionProps> = ({
	header,
	image,
	altText,
	imageLeft = false,
	children,
	imgHide
}) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 text-center lg:h-[85vh] bg-white'>
			{/* Image Section */}
			{imageLeft && (
				<div
					className={`w-full h-[400px] lg:h-full relative ${
						imgHide ? 'hidden lg:block' : 'block'
					}`}>
					<Image
						src={image}
						alt={altText}
						fill
						className='w-full h-full object-cover'
					/>
				</div>
			)}

			{/* Content Section */}
			<div className='flex flex-col gap-y-1 justify-center items-center bg-white p-6 md:p-10'>
				<h2 className='font-medium py-4 md:py-7 text-2xl md:text-4xl max-w-full md:max-w-[90%] text-[#1A1A1A]'>
					{header}
				</h2>
				<div className='max-w-full md:max-w-[90%]'>{children}</div>
			</div>

			{/* Image Section (if imageLeft is false) */}
			{!imageLeft && (
				<div
					className={`w-full h-[400px] lg:h-full relative ${
						imgHide ? 'hidden lg:block' : 'block'
					}`}>
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

export default SharedSection;
