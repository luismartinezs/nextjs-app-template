import React from 'react'
import { FaXTwitter, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaLink } from 'react-icons/fa6'

export const UrlLinkIcon = ({ url }: { url: string }) => {
	const getIconAndText = (url: string) => {
		if (url.includes('twitter.com') || url.includes('x.com')) {
			return {
				icon: <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Follow on X'
			}
		}
		if (url.includes('linkedin.com')) {
			return {
				icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Connect on LinkedIn'
			}
		}
		if (url.includes('github.com')) {
			return {
				icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Follow on GitHub'
			}
		}
		if (url.includes('youtube.com')) {
			return {
				icon: <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Subscribe on YouTube'
			}
		}
		if (url.includes('instagram.com')) {
			return {
				icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Follow on Instagram'
			}
		}
		if (url.includes('facebook.com')) {
			return {
				icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Follow on Facebook'
			}
		}
		if (url.includes('tiktok.com')) {
			return {
				icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />,
				text: 'Follow on TikTok'
			}
		}
		return {
			icon: <FaLink className="w-5 h-5 sm:w-6 sm:h-6" />,
			text: 'Visit Website'
		}
	}

	const iconData = getIconAndText(url)

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="max-w-fit min-w-min aspect-square p-2 sm:p-3"
		>
			{iconData.icon}
			<span className="sr-only">{iconData.text}</span>
		</a>
	)
}
