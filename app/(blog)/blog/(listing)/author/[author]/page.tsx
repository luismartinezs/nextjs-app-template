import { SectionWrapper } from '@/shared/components/section-wrapper'
import { Articles } from '@/modules/blog/articles'
import { authors } from '@/modules/blog/content'
import { AuthorBlock } from '@/modules/blog/author-block'
import { getSEOTags } from '@/modules/seo/seo'

export async function generateMetadata({
	params,
}: {
	params: { author: string }
}) {
	const author = authors[params.author]
	return getSEOTags({
		title: `Articles by ${author.name}`,
		description: `Articles by ${author.name}`,
		canonicalUrlRelative: `/blog/author/${author.slug}`,
		openGraph: {
			title: `Articles by ${author.name}`,
			description: `Articles by ${author.name}`,
		},
	})
}

export default function BlogListingPage({
	params,
}: {
	params: { author: string }
}) {
	const author = authors[params.author]

	return (
		<SectionWrapper>
			<AuthorBlock author={author} />
			<h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 md:mb-6 text-center mt-12 md:mt-16 lg:mt-20">
				Most recent articles by {author.name}
			</h1>
			<Articles className="mt-8 md:mt-12 lg:mt-20" author={author.slug} />
		</SectionWrapper>
	)
}
