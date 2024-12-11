'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { TRANSLATION } from '@/config/translation.config'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
	className?: string
}

export const ArchiveHeader: React.FC<Props> = ({ className }) => {
	const { t } = useTranslation()

	return (
		<div className={cn('', className)}>
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
				{t(TRANSLATION.ALL_PROJECTS)}
			</h1>
		</div>
	)
}
