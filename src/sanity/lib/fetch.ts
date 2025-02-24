import 'server-only';
import type { QueryParams } from '@sanity/client';
import { client } from '@/sanity/lib/client';


const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
	isDraftMode = false,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
	isDraftMode?: boolean;
}): Promise<QueryResponse> {
	if (isDraftMode && !token) {
		throw new Error(
			'The `SANITY_API_READ_TOKEN` environment variable is required.'
		);
	}
	const isDevelopment = process.env.NODE_ENV === 'development';

	return client
		.withConfig({ useCdn: !isDraftMode })
		.fetch<QueryResponse>(query, params, {
			cache: isDevelopment || isDraftMode ? 'no-store' : 'force-cache',
			...(isDraftMode && {
				token: token,
				perspective: 'previewDrafts',
			}),
			next: {
				...(isDraftMode && { revalidate: 30 }),
				tags,
			},
		});
}

export async function getPost(slug: string) {
	try {
		const post = await client.fetch(
			`
      *[_type == "post" && slug.current == $slug][0]{
        title,
        "slug": slug.current,
        body,
        publishedAt,
        "author": author->name
      }
    `,
			{ slug }
		);

		return post;
	} catch (error) {
		console.error('Error fetching post:', error);
		throw new Error('Failed to fetch post');
	}
}
