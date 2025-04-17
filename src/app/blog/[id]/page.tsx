import { sanityFetch } from '@/sanity/lib/fetch';
import {
	postByIdQuery,
	postBySlugQuery,
} from '@/sanity/lib/queries';
import type { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { PortableText } from '@portabletext/react';

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
	const { id } = await params;

	
	return (
		<div className='flex flex-col items-center container mx-auto max-w-6xl mt-[85px]'>
			<div className='mt-6 flex flex-col items-center container px-6'>
				<React.Suspense fallback={<p>Loading...</p>}>
					<PostContent id={id} />
					{/* <div className='min-h-[100px] w-full mb-8'>
						<h3 className='mb-8 font-semibold text-lg leading-tight'>Continue reading</h3>
						<div className="border border-[red] min-h-[100px]"></div>
					</div> */}
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
					<div className='w-full flex justify-center rounded-lg relative'>
						<Image
							src={post.mainImage.asset.url || '/placeholder.svg'}
							alt={post.title}
							width={800}
							height={400}
							className='rounded-lg shadow-md w-[800px] h-[400px] object-cover'
						/>
					</div>
				)}
				<div className='md:p-5 my-4'>
					<h1 className='text-center mb-4 font-semibold text-3xl md:text-2xl leading-tight'>
						{post.title}
					</h1>
					<PortableText value={post.body} />
				</div>
			</>
		);
	} catch (error) {
		console.error('Error fetching post:', error);
		return <h1 className='text-2xl font-semibold'>Error loading post</h1>;
	}
};	

// blog/[id]/page.tsx