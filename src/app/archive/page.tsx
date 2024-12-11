import { ArchiveHeader, ProjectsTable } from '@/components'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Archive',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return (
		<div className='lg:py-28 lg:h-[100vh]'>
			<ArchiveHeader />
			<ProjectsTable />
		</div>
	)
}
