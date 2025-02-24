import { getPost } from "@/sanity/lib/fetch";


export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const post = await getPost(params.slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<article>
			<h1>{post.title}</h1>
			<p>
				By {post.author} on {new Date(post.publishedAt).toLocaleDateString()}
			</p>
			<div>{post.body}</div>
		</article>
	);
}
