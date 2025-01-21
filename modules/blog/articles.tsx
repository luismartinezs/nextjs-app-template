import { cn } from '@/shared/utils/cn'
import { Link } from '@/shared/components/link'
import { Image } from '@/shared/components/image'
import { getArticles } from './utils'

interface ArticlesProps {
	className?: string
	category?: string
	author?: string
	limit?: number
}

export async function Articles({ className, category, author, limit }: ArticlesProps) {
	const articles = await getArticles({ category, author, limit })

	if (!articles.length) {
		return (
			<div className={cn('text-center py-12', className)}>
				<p className='text-lg text-gray-500'>No articles found.</p>
			</div>
		)
	}

	return (
		<div className={cn('grid gap-8 md:grid-cols-2 lg:grid-cols-3', className)}>
			{articles.map((article) => (
				<Link
					key={article.slug}
					href={`/blog/${article.slug}`}
					className='group'
				>
					<article className='relative h-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-700'>
						<Image
							src={article.coverImage}
							alt={article.title}
							width={600}
							height={400}
							className='aspect-[3/2] object-cover'
						/>

						<div className='p-6'>
							<div className='flex items-center gap-2 text-sm text-gray-400'>
								<time dateTime={article.date}>{article.date}</time>
								<span>•</span>
								<span>{article.readingTime} min read</span>
							</div>

							<h2 className='mt-4 text-xl font-semibold text-white group-hover:text-primary-400 transition-colors'>
								{article.title}
							</h2>

							<p className='mt-2 text-gray-400 line-clamp-2'>
								{article.summary}
							</p>

							<div className='mt-6 flex items-center gap-4'>
								<Image
									src={article.author.image}
									alt={article.author.name}
									width={40}
									height={40}
									className='rounded-full'
								/>
								<div>
									<p className='text-sm font-medium text-white'>
										{article.author.name}
									</p>
									<p className='text-sm text-gray-400'>
										{article.author.bio}
									</p>
								</div>
							</div>
						</div>
					</article>
				</Link>
			))}
		</div>
	)
}
