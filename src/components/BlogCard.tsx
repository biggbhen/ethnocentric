import React from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import { useRouter } from 'next/navigation';


interface BlogCardProps {
	item: any;
}

const BlogCard: React.FC<BlogCardProps> = ({
	item,
	
}) => {
		const router = useRouter();
		const handleReadMoreClick = (id: string) => {
			router.push(`/blog/${id}`);
		};
	return (
		<div>
			<div className='md:max-w-[50rem] text-end px-5 md:px-0'>
				<h2 className='font-medium text-2xl md:text-4xl text-[#1A1A1A]'>
					{item?.title}
				</h2>
				<div className='text-lg mb-8 md:text-xl line-clamp-3 my-[1.5rem]'>
					{item?.description}
				</div>
				<div
					className='flex underline cursor-pointer justify-end items-center text-[#FFA929] mb-5 font-medium'
					onClick={()=> handleReadMoreClick(item?._id)}>
					See more
					<GoArrowUpRight />
				</div>
				<div
					className='relative h-[400px] cursor-pointer'
					onClick={()=> handleReadMoreClick(item?._id)}>
					<Image
						src={item?.imageURL}
						alt='Main image'
						fill
						className='w-full rounded-3xl object-cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
