import ArticlePage, { generateArticleMetadata, generateArticleStaticParams } from '@/modules/blog/article-page/page'

export async function generateStaticParams() {
	return generateArticleStaticParams()
}

export function generateMetadata({ params }: { params: { slug: string } }) {
	return generateArticleMetadata({ slug: params.slug })
}

export default function Blog({ params }: { params: { slug: string } }) {
	return <ArticlePage slug={params.slug} />
}
