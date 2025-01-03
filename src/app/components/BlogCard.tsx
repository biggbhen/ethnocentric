import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';


interface BlogCardProps {
	title: string;
	description: string;
	linkText: string;
	onLinkClick?: () => void;
	mainImageSrc: StaticImageData;
	
}

const BlogCard: React.FC<BlogCardProps> = ({
	title,
	description,
	linkText,
	onLinkClick,
	mainImageSrc,
	
}) => {
	return (
		<div>
			<div className='md:max-w-[50rem] text-end px-5 md:px-0'>
				<h2 className='flex  justify-end font-medium text-dark-gray text-xl md:text-5xl'>
					{title}
				</h2>
				<div className='font-normal text-md md:text-2xl line-clamp-3 text-dark-gray my-[1.5rem]'>
					{description}
				</div>
				<div
					className='flex underline cursor-pointer justify-end items-center text-[#FFA929] mb-5 font-medium'
					onClick={onLinkClick}>
					{linkText}
					<GoArrowUpRight />
				</div>
				<div className='relative'>
					{/* Image container with negative margins */}
					<div className='lg:-ms-[4rem]'>
						<Image src={mainImageSrc} alt='Main image' className='w-full rounded-3xl' />
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
