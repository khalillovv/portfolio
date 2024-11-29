import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
	className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<footer className={cn('mt-24 text-xs font-normal', className)}>
			Built with {''}
			<Link
				href='https://nextjs.org/'
				className='text-title transition-colors hover:text-primary'
				target='_blank'
			>
				Next.js
			</Link>
			{''} and {''}
			<Link
				href='https://tailwindcss.com/'
				className='text-title transition-colors hover:text-primary'
				target='_blank'
			>
				Tailwind CSS
			</Link>
			, deployed with {''}
			<Link
				href='https://vercel.com'
				className='text-title transition-colors hover:text-primary'
				target='_blank'
			>
				Vercel
			</Link>
			.
		</footer>
	)
}
