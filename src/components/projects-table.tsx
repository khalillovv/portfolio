'use client'
import { TRANSLATION } from '@/config/translation.config'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/projects.data'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from './project'

interface Props {
	className?: string
}

export const ProjectsTable: React.FC<Props> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<table className={cn('table-auto w-full mt-12', className)}>
			<thead className='sticky top-0 z-10 backdrop-blur-md bg-backgroundPrimary/80'>
				<tr className='text-left text-title'>
					<th className='w-1p pr-8 py-4 font-semibold text-xs'>
						{t(TRANSLATION.TABLE_YEAR)}
					</th>
					<th className='md:w-50p lg:w-20p pr-8 py-4 font-semibold text-xs'>
						{t(TRANSLATION.TABLE_PROJECT)}
					</th>
					<th className='hidden lg:table-cell w-1/6 pr-8 py-4 font-semibold text-xs'>
						{t(TRANSLATION.TABLE_DEVELOPMENT)}
					</th>
					<th className='hidden lg:table-cell w-2/6 pr-8 py-4 font-semibold text-xs'>
						{t(TRANSLATION.TABLE_BUILT_WITH)}
					</th>
					<th className='hidden md:table-cell lg:w-2/6 py-4 font-semibold text-xs'>
						{t(TRANSLATION.TABLE_LINK)}
					</th>
				</tr>
			</thead>
			<tbody>
				{PROJECTS.map(project => (
					<Project
						key={project.title}
						year={project.year}
						title={project.title}
						image={project.image}
						description={project.description}
						development={project.development}
						build={project.build}
						link={project.link}
						linkName={project.linkName}
						hasArchive
					/>
				))}
			</tbody>
		</table>
	)
}
