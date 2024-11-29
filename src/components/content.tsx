import { cn } from '@/lib/utils'
import React from 'react'
import { About } from './about'
import { Footer } from './footer'
import { Projects } from './projects'

interface Props {
	className?: string
}

export const Content: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('lg:py-24', className)}>
			<About className='mb-36' />
			<Projects />
			<Footer />
		</div>
	)
}
