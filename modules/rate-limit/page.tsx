'use client'

import React from 'react'
import { Link } from '@/shared/components/Link'

const BlockedPage = () => {
	return (
		<main className="relative h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
			<h1 className="text-xl md:text-2xl font-medium">Hm, Access Blocked</h1>
			<p>Try again in 1 minute</p>

			<div>
				<Link className="link" href="/sign-in">
					Login
				</Link>{' '}
				or{' '}
				<Link className="link" href="/">
					Home
				</Link>
			</div>
		</main>
	)
}

export { BlockedPage }
