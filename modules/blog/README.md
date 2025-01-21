Article format:

Each article should be an MDX file with the following frontmatter:

- title: String - The title of the article
- publishedAt: String - The publication date in 'YYYY-MM-DD' format
- summary: String - A brief description of the article content
- author: String - The article author's identifier
- image: String - Path to the article's featured image
- categories: String - Comma-separated list of category tags

Example:

```mdx
---
title: 'Lorem Ipsum: Understanding the Placeholder Text'
publishedAt: '2024-01-01'
summary: 'Learn about Lorem Ipsum, its history, and how this dummy text has become the standard for placeholder content in design and publishing.'
author: 'luis-martinez'
image: '/blog/articles/1024x512.png'
categories: 'design, publishing'
---
```

Valid categories and authors are defined in the `content.ts` file.

Recommendations:

- Title should be around 50 characters
- Summary should be around 150 characters
- Image should be around 1200x630
