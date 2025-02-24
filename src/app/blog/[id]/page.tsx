import { sanityFetch } from '@/sanity/lib/fetch';
import {
	postByIdQuery,
	postBySlugQuery,
	postPathsQuery,
} from '@/sanity/lib/queries';
import type { SanityDocument } from 'next-sanity';
import Image from 'next/image';

export async function generateStaticParams() {
	const paths = await sanityFetch<{ params: { id: string } }[]>({
		query: postPathsQuery,
	});
	return paths;
}

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

const Page = async ({ params }: { params: { id: string } }) => {
	try {
		const post = await getPost(params.id);
		return (
			<div className='mt-[7rem] flex flex-col items-center container mx-auto max-w-5xl px-6'>
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
			</div>
		);
	} catch (error) {
		return (
			<div className='mt-[7rem] flex flex-col items-center container mx-auto max-w-5xl px-6'>
				<h1 className='text-2xl font-semibold'>Post not found</h1>
			</div>
		);
	}
};

export default Page;