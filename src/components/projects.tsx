'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/projects.data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Project } from './project'

interface Props {
	className?: string
}

export const Projects: React.FC<Props> = ({ className }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	return (
		<div className={cn('flex flex-wrap gap-2', className)}>
			<ul>
				{PROJECTS.slice(0, 4).map((project, index) => (
					<li
						key={project.title}
						onMouseEnter={() => setActiveIndex(index)}
						onMouseLeave={() => setActiveIndex(null)}
						className={`transition-opacity ${
							activeIndex !== null && activeIndex !== index
								? 'opacity-50'
								: 'opacity-100'
						}`}
					>
						<Project
							key={project.title}
							year={project.year}
							title={project.title}
							image={project.image}
							description={project.description}
							build={project.build}
							link={project.link}
							linkName={project.linkName}
						/>
					</li>
				))}
			</ul>

			<Link
				className='flex flex-row gap-1 text-title mt-6 font-semibold group'
				href={DASHBOARD_PAGES.ARCHIVE}
			>
				<span className='group-hover:border-b-2 border-primary'>
					Архів всіх проектів
				</span>
				<ArrowRight
					className='transition-transform group-hover:translate-x-1 mt-0.5'
					width={18}
					height={18}
				/>
			</Link>
		</div>
	)
}
