import React from 'react'
import { Author } from '../content'
import { Article } from '../utils'
import { cn } from '@/shared/utils/cn'
import { Image } from '@/shared/components/image'
import { Link } from '@/shared/components/link'

export const Aside = ({
	author,
	relatedArticles,
	className,
}: {
	author?: Author | null
	relatedArticles: Article[]
	className?: string
}) => {
	return (
		<aside
			className={cn(
				'lg:sticky lg:top-8 h-full border-t lg:border-t-0 lg:border-l border-gray-800',
				className
			)}
			aria-label="Article sidebar"
		>
			<div className="space-y-12 px-4 lg:px-8 py-10 ">
				{author && (
					<div>
						<h2 className="text-base uppercase tracking-wider text-gray-200 mb-6 font-semibold">
							Author
						</h2>
						<div className="flex items-center gap-4">
							<Image
								className="size-10 rounded-full ring-2 ring-primary-500/20"
								src={author.image}
								alt={`Profile picture of ${author.name}`}
								loading="lazy"
							/>
							<div>
								<Link href={`/blog/authors/${author.slug}`}>
									<p className="font-medium text-white text-base transition">
										{author.name}
									</p>
								</Link>
							</div>
						</div>
					</div>
				)}

				{relatedArticles.length > 0 && (
					<div>
						<h2 className="text-base uppercase tracking-wider text-gray-200 mb-6 font-semibold">
							Related Articles
						</h2>
						<div className="space-y-8">
							{relatedArticles.map((article, index) => (
								<div
									key={index}
									className="group cursor-pointer"
									role="article"
									aria-label={article.title}
								>
									<h3 className="text-base font-medium text-white group-hover:text-primary-400 transition">
										{article.title}
									</h3>
									<p className="text-base text-gray-300 mt-2">
										{article.summary}
									</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</aside>
	)
}
