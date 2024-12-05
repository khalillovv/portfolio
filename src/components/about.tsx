import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	return (
		<div id='about' className={cn('', className)}>
			<div className='sticky lg:hidden top-0 z-20 mb-4 py-5 backdrop-blur'>
				<h2 className='text-[14px] font-bold text-title uppercase tracking-widest'>
					About
				</h2>
			</div>

			<p className='font-normal leading-[26px] mb-4'>
				I`m a developer passionate about creating accessible, pixel-perfect user
				interfaces. I love combining thoughtful design with robust
				functionality, creating apps that are not only visually stunning, but
				also user-friendly. Especially inspiring is the work at the intersection
				of design and development, where projects combining aesthetics,
				performance and practicality are born.
			</p>
			<p className='font-normal leading-[26px] mb-4'>
				I am currently a{' '}
				<span className='text-title font-semibold'>
					Junior Fullstack-розробник.
				</span>
			</p>
			<p className='font-normal leading-[26px]'>
				In my spare time, I watch movies, listen to music and spend time with
				friends.
			</p>
		</div>
	)
}
