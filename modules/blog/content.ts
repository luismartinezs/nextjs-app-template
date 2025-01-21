export interface Category {
	slug: string
	title: string
	description: string
}

export interface Author {
	slug: string
	name: string
	image: string
	bio?: string
}

export const categories: Record<string, Category> = {
	tutorials: {
		slug: "tutorials",
		title: "Tutorials",
		description: "Step-by-step guides to help you learn and build with our platform."
	},
	guides: {
		slug: "guides",
		title: "Guides",
		description: "In-depth articles about best practices and advanced techniques."
	},
	news: {
		slug: "news",
		title: "News",
		description: "Latest updates, releases, and announcements from our team."
	}
}

export const authors: Record<string, Author> = {
	"john-doe": {
		slug: "john-doe",
		name: "John Doe",
		image: "/images/authors/john-doe.jpg",
		bio: "Senior Developer and Technical Writer"
	}
}
