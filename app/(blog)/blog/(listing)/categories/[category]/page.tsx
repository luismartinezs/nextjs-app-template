import { SectionWrapper } from '@/shared/components/section-wrapper'
import { Articles } from '@/modules/blog/articles'
import { categories } from '@/modules/blog/content'
import { getSEOTags } from '@/modules/seo/seo'

export async function generateMetadata({
	params,
}: {
	params: { category: string }
}) {
	const category = categories[params.category]
	return getSEOTags({
		title: `Articles in ${category.title}`,
		description: `Articles in ${category.title}`,
		canonicalUrlRelative: `/blog/categories/${category.slug}`,
		openGraph: {
			title: `Articles in ${category.title}`,
			description: `Articles in ${category.title}`,
		},
	})
}

export default function BlogListingPage({
	params,
}: {
	params: { category: string }
}) {
	const category = categories[params.category]

	return (
		<SectionWrapper>
			<h1 className="font-extrabold text-2xl md:text-3xl lg:text-5xl tracking-tight mb-4 md:mb-6 text-center px-4 md:px-6">
				{category.title}
			</h1>
			<p className="text-base md:text-lg opacity-80 leading-relaxed text-center max-w-3xl mx-auto px-4 md:px-6">
				{category.description}
			</p>
			<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-12 md:mt-16 lg:mt-20 px-4 md:px-6">
				Most recent articles in {category.title}
			</h2>
			<Articles className="mt-8 md:mt-12 lg:mt-20" category={category.slug} />
		</SectionWrapper>
	)
}
