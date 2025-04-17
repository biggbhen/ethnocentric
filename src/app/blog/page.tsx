'use client';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Divider from '../../assets/divider.svg';
import heroImage from '../../assets/heroImage.svg';
import ReactPaginate from 'react-paginate';
import Button from '@/components/ui/Button';
import ImageBackground from '@/components/ImageBackground';
import Sidebar from '@/components/Sidebar';
import BlogCard from '@/components/BlogCard';
import { SanityDocument } from 'next-sanity';
import { postsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

const Index = () => {

	const [blogPosts, setBlogPosts] = useState<SanityDocument[]>([]);
	const [currentPage, setCurrentPage] = useState(0);

	const FetchPosts = async () => {
		try {
			const response = await client.fetch<SanityDocument[]>(postsQuery);
			setBlogPosts(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		FetchPosts();
	}, []);

	const itemsPerPage = 8;

	const paginatedBlogs = blogPosts.reverse().slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	);

	const handlePageChange = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected);
	};

	const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

	return (
		<>
			<div>
				<ImageBackground
					imageSrc={heroImage}
					alt='A beautiful landscape background'
					className='h-screen '>
					<div className='text-white text-center px-4 py-8'>
						<h1 className='md:max-w-[55rem] text-bright-orange text-3xl font-medium mb-4 md:text-4xl lg:text-5xl'>
							Stories of Transformation and Innovation in Fashion
						</h1>
						<p className='text-lg text-dark-gray mb-8 md:text-xl md:max-w-[40rem] md:mx-auto'>
							Explore inspiring updates, success stories, and industry insights
							from the Fashion Future Program. Stay informed about how we’re
							shaping the future of fashion in Nigeria and beyond.
						</p>
						<div className='flex justify-center'>
							<Button
								className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
								variant='primary'
								onClick={() =>
									window.open(
										'https://registration.fashionfutureprogram.org',
										'_blank',
										'noopener,noreferrer'
									)
								}>
								Join the Program
							</Button>
						</div>
					</div>
				</ImageBackground>
			</div>
			<Image className='w-screen' src={Divider} alt='divider' />
			<div className=' container max-w-[90%] mx-auto pt-12 pb-8'>
				<div className='flex  flex-col-reverse lg:flex-row lg:justify-around gap-8'>
					{/* <Sidebar /> */}
					<div>
						<div className='grid md:grid-cols-4 gap-8 sm:grid-cols-1 '>
							{paginatedBlogs.map((blog) => (
								<BlogCard
									key={blog?._id}
									item={blog}
								/>
							))}
						</div>
						<div className='flex justify-center'>
							<ReactPaginate
								previousLabel={'Previous'}
								nextLabel={'Next'}
								pageCount={totalPages}
								onPageChange={handlePageChange}
								containerClassName={'pagination'}
								activeClassName={'active'}
								pageLinkClassName={'page-link'}
								previousLinkClassName={'page-link'}
								nextLinkClassName={'page-link'}
								disabledClassName={'disabled'}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
