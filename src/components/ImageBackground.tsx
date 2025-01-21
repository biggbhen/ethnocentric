import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageBackgroundProps {
	imageSrc: StaticImageData;
	alt: string;
	children: ReactNode;
	className?: string;
	Imageclass?: string;
}

const ImageBackground: FC<ImageBackgroundProps> = ({
	imageSrc,
	alt,
	children,
	className,
	Imageclass,
}) => {
	return (
		<div
			className={`relative flex items-center justify-center h-full w-full ${className}`}>
			{/* Background Image */}
			<Image
				src={imageSrc}
				alt={alt}
				layout='fill'
				objectFit='cover'
				priority
				className={`z-0 ${Imageclass}`}
			/>

			{/* Overlay for children */}
			<div className='relative z-10'>{children}</div>
		</div>
	);
};

export default ImageBackground;
