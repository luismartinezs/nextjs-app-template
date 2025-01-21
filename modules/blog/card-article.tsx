import { CategoryPill } from '@/modules/blog/category-pill'
import { authors, categories } from '@/modules/blog/content'
import { Metadata } from '@/modules/blog/utils'
import { Link } from '@/shared/components/link'
import { Image } from '@/shared/components/image'
export const CardArticle = (props: {
	article: {
		metadata: Metadata
		slug: string
		content: string
	}
}) => {
	const author = authors[props.article.metadata.author]
	const _categories = props.article.metadata.categories
		? props.article.metadata.categories
				.split(', ')
				.map((category) => categories[category])
		: []

	return (
		<article className="flex flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
			{props.article.metadata.image && (
				<div className="relative aspect-video overflow-hidden">
					<Image
						src={props.article.metadata.image}
						alt={props.article.metadata.title}
						className="h-full w-full object-cover"
						loading="lazy"
					/>
				</div>
			)}
			<div className="flex flex-1 flex-col justify-between p-4 sm:p-5 md:p-6">
				{_categories.length > 0 && (
					<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
						{_categories.map((category) => (
							<CategoryPill key={category.slug} category={category} />
						))}
					</div>
				)}
				<div className="flex-1">
					<Link href={`/blog/${props.article.slug}`}>
						<h2 className="text-lg sm:text-xl font-semibold text-white transition-colors">
							{props.article.metadata.title}
						</h2>
					</Link>
					<p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400 line-clamp-3">
						{props.article.metadata.summary}
					</p>
				</div>
				<div className="mt-4 sm:mt-6 flex items-center">
					{author && (
						<div className="flex-shrink-0">
							<img
								className="size-6 sm:size-8 rounded-full"
								src={author.image}
								alt={author.name}
								loading="lazy"
							/>
						</div>
					)}
					<div className="ml-2 sm:ml-3 flex items-center gap-2">
						{author && (
							<Link
								href={`/blog/author/${author.slug}`}
								className="text-xs sm:text-sm font-medium text-white hover:text-primary-500 transition-colors"
							>
								{author.name}
							</Link>
						)}
						<span className="text-xs sm:text-sm text-gray-400">
							{new Date(props.article.metadata.publishedAt).toLocaleDateString(
								'en-US',
								{
									month: 'long',
									day: 'numeric',
								}
							)}
						</span>
					</div>
				</div>
			</div>
		</article>
	)
}
