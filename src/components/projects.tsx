'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { TRANSLATION } from '@/config/translation.config'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/projects.data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from './project'

interface Props {
	className?: string
}

export const Projects: React.FC<Props> = ({ className }) => {
	const { t } = useTranslation()
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	return (
		<div id='projects' className={cn('', className)}>
			<div className='sticky lg:hidden top-0 z-20 mb-6 py-5 backdrop-blur'>
				<h2 className='text-[14px] font-bold text-title uppercase tracking-widest'>
					{t(TRANSLATION.PROJECTS_NAV)}
				</h2>
			</div>
			<ul>
				{PROJECTS.slice(0, 4).map((project, index) => (
					<li
						key={project.title}
						onMouseEnter={() => setActiveIndex(index)}
						onMouseLeave={() => setActiveIndex(null)}
						className={`mb-12 lg:mb-0 transition-opacity ${
							activeIndex !== null && activeIndex !== index
								? 'lg:opacity-50'
								: 'lg:opacity-100'
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
				className='flex flex-row gap-1 text-title mt-6 font-semibold min-h-6 group'
				href={DASHBOARD_PAGES.ARCHIVE}
			>
				<span className='group-hover:border-b-2 border-primary capitalize'>
					{t(TRANSLATION.VIEW_ARCHIVE)}
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
