'use client'
import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
	className?: string
}

export const ChangeLanguage: React.FC<Props> = ({ className }) => {
	const { i18n } = useTranslation()

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language')
		if (savedLanguage && savedLanguage !== i18n.language) {
			i18n.changeLanguage(savedLanguage)
		}
	}, [i18n])

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		localStorage.setItem('language', lng)
	}

	const en = i18n.language === 'en'
	const uk = i18n.language === 'uk'
	const ru = i18n.language === 'ru'
	return (
		<div className={cn('flex flex-row gap-2', className)}>
			<button
				onClick={() => changeLanguage('en')}
				className={cn(en && 'text-title', 'transition-colors hover:text-title')}
			>
				en
			</button>
			<div className='border border-text' />
			<button
				onClick={() => changeLanguage('uk')}
				className={cn(uk && 'text-title', 'transition-colors hover:text-title')}
			>
				укр
			</button>
			<div className='border border-text' />
			<button
				onClick={() => changeLanguage('ru')}
				className={cn(ru && 'text-title', 'transition-colors hover:text-title')}
			>
				рус
			</button>
		</div>
	)
}
