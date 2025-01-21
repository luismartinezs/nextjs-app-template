import { Author } from './content'
import { UrlLinkIcon } from './UrlLinkIcon'

export const AuthorBlock = ({ author }: { author: Author }) => {
	return (
		<div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 bg-black/20 rounded-lg p-4 sm:p-6 max-w-3xl mx-auto">
			<div className="flex flex-col gap-4 sm:gap-6 w-full md:w-auto">
				<div>
					<h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">
						{author.name}
					</h2>
					<p className="text-white text-base sm:text-lg">{author.title}</p>
				</div>
				<p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
					{author.description}
				</p>
				<div className="flex gap-2 mt-1">
					{Array.isArray(author.url) ? (
						author.url.map((url) => <UrlLinkIcon key={url} url={url} />)
					) : (
						<UrlLinkIcon url={author.url} />
					)}
				</div>
			</div>
			<img
				src={author.image}
				alt={author.name}
				className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl object-cover md:order-last order-first"
			/>
		</div>
	)
}
