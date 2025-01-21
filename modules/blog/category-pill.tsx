import { Link } from '@/shared/components/link'
import { Category } from './content'
import { cn } from '@/shared/utils/cn'

export const CategoryPill = (props: {
	category: Category
	className?: string
}) => {
	return (
		<Link
			href={`/blog/categories/${props.category.slug}`}
			className={cn(
				'inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300 hover:bg-primary-500 hover:text-white hover:no-underline',
				props.className
			)}
		>
			{props.category.title}
		</Link>
	)
}
