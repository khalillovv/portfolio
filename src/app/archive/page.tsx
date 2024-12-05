import { ProjectsTable } from '@/components'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Archive',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return (
		<div className='lg:py-28 lg:h-[100vh]'>
			<Link
				href={DASHBOARD_PAGES.HOME}
				className='mb-2 flex flex-row gap-1 font-semibold items-center text-primary group'
			>
				<ArrowLeft
					className='transition-transform group-hover:-translate-x-1'
					width={18}
					height={18}
				/>
				Khalilov Oleksandr
			</Link>
			<h1 className='text-3xl md:text-[48px] font-bold leading-[48px] text-title capitalize'>
				All projects
			</h1>
			<ProjectsTable />
		</div>
	)
}
