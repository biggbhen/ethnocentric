import { sanityFetch } from '@/sanity/lib/fetch';
import {
	postByIdQuery,
	postBySlugQuery,
} from '@/sanity/lib/queries';
import type { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

type Props = {
	params: Promise<{ id: string }>;
};

async function getPost(id: string): Promise<SanityDocument> {
	const cleanId = id.replace('drafts.', '');
	const isId = /^[a-z0-9-]+$/i.test(cleanId);
	const query = isId ? postByIdQuery : postBySlugQuery;
	const params = isId ? { id: cleanId } : { slug: cleanId };

	try {
		const post = await sanityFetch<SanityDocument>({
			query,
			params,
			tags: ['post'],
		});

		if (!post) {
			throw new Error('Post not found');
		}

		return post;
	} catch (error) {
		console.error('Error fetching post:', error);
		throw new Error('Failed to fetch post');
	}
}

const Page = async({ params }: Props) => {
	// const fetchPost = async () => {
	// 	try {
	// 		const { id } = await params;
	// 		return await getPost(id);
	// 	} catch (error) {
	// 		console.error('Error fetching post:', error);
	// 		return null;
	// 	}
	// };
	const { id } = await params;
	return (
		<div className='flex flex-col items-center container mx-auto max-w-5xl px-6'>
			<div className='mt-[7rem] flex flex-col items-center container mx-auto max-w-5xl px-6'>
				<React.Suspense fallback={<p>Loading...</p>}>
					<PostContent id={id} />
				</React.Suspense>
			</div>
		</div>
	);
};

export default Page;

const PostContent = async ({ id }: { id: string }) => {
	try {
		const post = await getPost(id);

		if (!post) {
			return <h1 className='text-2xl font-semibold'>Post not found</h1>;
		}

		return (
			<>
				{post.mainImage && (
					<Image
						src={post.mainImage.asset.url || '/placeholder.svg'}
						alt={post.title}
						width={800}
						height={400}
						className='rounded-lg shadow-md'
						style={{ height: '400px', width: '800px', objectFit: 'cover' }}
					/>
				)}
				<div className='md:p-5 my-4'>
					<h1 className='text-center mb-2 font-semibold text-3xl md:text-4xl leading-tight'>
						{post.title}
					</h1>
					<p className='text-start max-w-4xl text-base md:text-md lg:text-lg'>
						{post.description}
					</p>
				</div>
			</>
		);
	} catch (error) {
		console.error('Error fetching post:', error);
		return <h1 className='text-2xl font-semibold'>Error loading post</h1>;
	}
};	

// blog/[id]/page.tsx