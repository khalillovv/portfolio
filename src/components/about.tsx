'use client'
import { TRANSLATION } from '@/config/translation.config'
import { cn } from '@/lib/utils'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<div id='about' className={cn('', className)}>
			<div className='sticky lg:hidden top-0 z-20 mb-4 py-5 backdrop-blur'>
				<h2 className='text-[14px] font-bold text-title uppercase tracking-widest'>
					{t(TRANSLATION.ABOUT_NAV)}
				</h2>
			</div>

			<p className='font-normal leading-[26px] mb-4'>
				{t(TRANSLATION.ABOUT_TEXT_FIRST)}
			</p>
			<p className='font-normal leading-[26px] mb-4'>
				<Trans i18nKey={TRANSLATION.ABOUT_TEXT_SECOND}>
					В настоящее время я <span>Junior Fullstack-розробник.</span>
				</Trans>
			</p>
			<p className='font-normal leading-[26px]'>
				{t(TRANSLATION.ABOUT_TEXT_THIRD)}
			</p>
		</div>
	)
}
