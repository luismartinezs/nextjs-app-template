import { Link } from '@/shared/components/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { cn } from '@/shared/utils/cn'
import { MDXComponents } from 'mdx/types'

function Table({
	data,
}: {
	data: {
		headers: string[]
		rows: string[][]
	}
}) {
	const headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	))
	const rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

function Callout({
	children,
	type = 'info',
}: {
	children: React.ReactNode
	type?: 'info' | 'warning' | 'success' | 'error'
}) {
	const styles = {
		info: 'bg-blue-900/20 border-blue-500 text-blue-200',
		warning: 'bg-yellow-900/20 border-yellow-500 text-yellow-200',
		success: 'bg-green-900/20 border-green-500 text-green-200',
		error: 'bg-red-900/20 border-red-500 text-red-200',
	}

	return (
		<div className={cn('p-4 border-l-4 rounded-r-lg my-6', styles[type])}>
			{children}
		</div>
	)
}

function Card({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<div className="rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 my-6">
			<h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent !mt-0">
				{title}
			</h3>
			<div className="text-gray-300">{children}</div>
		</div>
	)
}

function CustomLink(props: { href: string; children: React.ReactNode }) {
	const { href, ...rest } = props

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...rest}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <Link {...props} />
	}

	return (
		<a
			href={href}
			className="text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
			target="_blank"
			rel="noopener noreferrer"
			{...rest}
		>
			{props.children}
		</a>
	)
}

function RoundedImage(props: ImageProps) {
	const { alt, className, ...rest } = props
	return (
		<div className="relative my-8 overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl">
			<Image
				alt={alt}
				className={cn(
					'rounded-lg transition-transform hover:scale-105',
					className
				)}
				{...rest}
			/>
		</div>
	)
}

function Code({ children, ...props }: { children: string }) {
	const codeHTML = highlight(children)
	return (
		<code
			className="rounded-md bg-gray-800 px-2 py-1 font-mono text-sm"
			dangerouslySetInnerHTML={{ __html: codeHTML }}
			{...props}
		/>
	)
}

function slugify(str: string) {
	return str
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/&/g, '-and-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
	const Heading = ({ children }: { children: string }) => {
		const slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{
				id: slug,
				className:
					'font-bold tracking-tight text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent',
			},
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className:
						'anchor opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary-400',
				}),
			],
			children
		)
	}

	Heading.displayName = `Heading${level}`
	return Heading
}

function UnorderedList({ children }: { children: React.ReactNode }) {
	return (
		<ul className="my-6 space-y-2 list-disc list-inside marker:text-primary-400">
			{children}
		</ul>
	)
}

function Blockquote({ children }: { children: React.ReactNode }) {
	return (
		<blockquote className="border-l-4 border-primary-500 bg-gray-900 pl-4 py-2 my-4 italic text-gray-300">
			{children}
		</blockquote>
	)
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	code: Code,
	Table,
	ul: UnorderedList,
	blockquote: Blockquote,
	Callout,
	Card,
}

export function CustomMDX(props: MDXRemoteProps) {
	return (
		<MDXRemote
			{...props}
			components={
				{ ...components, ...(props.components || {}) } as MDXComponents
			}
		/>
	)
}
