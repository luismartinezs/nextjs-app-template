import { brandName } from '@/shared/constants/brand'
import { SectionWrapper } from '@/shared/components/section-wrapper'
import { Articles } from '@/modules/blog/articles'
import { getSEOTags } from '@/modules/seo/seo'

export const metadata = getSEOTags({
	title: `The ${brandName} Blog`,
	description: `Learn everything about ${brandName} and how to use it to grow your business.`,
	canonicalUrlRelative: '/blog',
	openGraph: {
		title: `The ${brandName} Blog`,
		description: `Learn everything about ${brandName} and how to use it to grow your business.`,
	},
})

export default function BlogListingPage() {
	return (
		<SectionWrapper>
			<h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6 text-center">
				The {brandName} Blog
			</h1>
			<p className="text-lg opacity-80 leading-relaxed text-center">
				Learn everything about {brandName} and how to use it to grow your
				business.
			</p>
			<Articles className="mt-20" />
		</SectionWrapper>
	)
}
