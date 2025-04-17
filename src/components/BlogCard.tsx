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
		<div className='shadow-md rounded-lg cursor-pointer'>
			<div className='m-4'>
				<div
					className='relative h-[150px] w-full cursor-pointer mb-2'
					style={{ position: 'relative' }}
					onClick={() => handleReadMoreClick(item?._id)}>
					<Image
						src={item?.imageURL}
						alt='Main image'
						fill
						className='rounded-lg object-cover'
					/>
				</div>
				<h2 className='font-medium text-base text-[#1A1A1A] hover:underline cursor-pointer' onClick={() => handleReadMoreClick(item?._id)}>
					{item?.title}
				</h2>
				<p className='text-sm mb-4 line-clamp-3 mt-2'>
					{item?.description?.split(" ").slice(0, 10).join(" ") + "…"}
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
