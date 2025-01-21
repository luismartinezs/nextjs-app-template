import { notFound } from 'next/navigation'
import { CustomMDX } from '@/modules/blog/mdx'
import { getArticles, formatDate } from '@/modules/blog/utils'
import { brandUrl } from '@/shared/constants/brand'
import { Image } from '@/shared/components/image'
import { authors, categories } from '../content'
import { CategoryPill } from '../category-pill'
import { Aside } from './aside'
import { Link } from '@/shared/components/Link'

export async function generateArticleStaticParams() {
	const posts = getArticles()

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export function generateArticleMetadata({ slug }: { slug: string }) {
	const post = getArticles().find((post) => post.slug === slug)
	if (!post) {
		return
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata
	const ogImage = image
		? image.startsWith('http')
			? image
			: `${brandUrl}${image}`
		: `${brandUrl}/twitter-image.png`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${brandUrl}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function ArticlePage({ slug }: { slug: string }) {
	const posts = getArticles()
	const post = posts.find((post) => post.slug === slug)

	if (!post) {
		notFound()
	}

	let relatedArticles = posts
		.filter((_post) => _post.slug !== post.slug)
		.filter((_post) => {
			// Handle case where categories is undefined
			if (!post.metadata.categories || !_post.metadata.categories) {
				return false
			}
			const postCategories = post.metadata.categories.split(', ')
			const _postCategories = _post.metadata.categories.split(', ')
			return postCategories.some((category) =>
				_postCategories.includes(category)
			)
		})
		.slice(0, 3)

	if (relatedArticles.length === 0) {
		relatedArticles = posts
			.sort((a, b) => {
				return (
					new Date(b.metadata.publishedAt).getTime() -
					new Date(a.metadata.publishedAt).getTime()
				)
			})
			.slice(0, 3)
			.filter((_post) => _post.slug !== post.slug)
	}

	const _author = post?.metadata.author ? authors[post.metadata.author] : null
	const _categories = post?.metadata.categories
		? post.metadata.categories
				.split(', ')
				.map((category) => categories[category])
		: []

	return (
		<div className="lg:flex lg:gap-8 my-12">
			<section className="lg:w-3/4 prose prose-invert sm:prose-invert mx-auto sm:prose lg:prose-lg xl:prose-xl">
				<Link
					href="/blog"
					className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition mb-8 !no-underline"
				>
					<span aria-hidden="true">&larr;</span> Back to blog
				</Link>
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'BlogPosting',
							headline: post.metadata.title,
							datePublished: post.metadata.publishedAt,
							dateModified: post.metadata.publishedAt,
							description: post.metadata.summary,
							image: post.metadata.image
								? `${brandUrl}${post.metadata.image}`
								: `/og?title=${encodeURIComponent(post.metadata.title)}`,
							url: `${brandUrl}/blog/${post.slug}`,
							author: {
								'@type': 'Person',
								name: 'My Portfolio',
							},
						}),
					}}
				/>
				<div className="flex flex-wrap items-center gap-2 mb-4">
					{_categories.length > 0 && (
						<>
							{_categories.map((category) => (
								<CategoryPill
									key={category.slug}
									category={category}
									className="!no-underline"
								/>
							))}
						</>
					)}
					<p className="text-sm text-gray-400">
						{formatDate(post.metadata.publishedAt)}
					</p>
				</div>
				<h1 className="title font-semibold text-2xl tracking-tighter">
					{post.metadata.title}
				</h1>
				<p className="">{post.metadata.summary}</p>
				{post.metadata.image && (
					<Image
						src={post.metadata.image}
						alt={post.metadata.title}
						className="w-full h-auto"
						loading="lazy"
					/>
				)}
				<article>
					<CustomMDX source={post.content} />
				</article>
			</section>
			<Aside
				author={_author}
				relatedArticles={relatedArticles}
				className="lg:w-1/4"
			/>
		</div>
	)
}
