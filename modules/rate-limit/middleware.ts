import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// Separate limits for different types of endpoints
const authCallbackRateLimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(5, '60 s'),
})

const webhookRateLimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(30, '60 s'), // Higher limit for webhooks
})

const oauthCallbackUrls = [
	'/api/youtube/callback',
	'/api/facebook/callback',
	'/api/x/callback',
	'/api/tiktok/callback',
	'/api/snapchat/callback',
]

const webhookUrls = ['/api/stripe/webhook']

export async function rateLimitMiddleware(request: NextRequest) {
	const url = request.url
	const ip = request.ip ?? '127.0.0.1'

	if (oauthCallbackUrls.some((path) => url.includes(path))) {
		const { success } = await authCallbackRateLimit.limit(ip)
		if (!success) {
			return NextResponse.redirect(new URL('/blocked', request.url))
		}
	}

	if (webhookUrls.some((path) => url.includes(path))) {
		const { success } = await webhookRateLimit.limit(ip)
		if (!success) {
			return NextResponse.redirect(new URL('/blocked', request.url))
		}
	}

	return request
}
