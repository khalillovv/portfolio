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
		<div className={cn('py-24 lg:w-[530px]', className)}>
			<About className='mb-24' />
			<Projects />
			<Footer />
		</div>
	)
}
