import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<p className='font-normal leading-6 mb-4'>
				Я разработчик, увлеченный созданием доступных, идеальных до пикселя
				пользовательских интерфейсов. Мне нравится сочетать продуманный дизайн с
				надежной функциональностью, создавая приложения, которые впечатляют не
				только внешним видом, но и удобством использования. Особенно вдохновляет
				работа на пересечении дизайна и разработки, где рождаются проекты,
				сочетающие эстетику, производительность и практичность.
			</p>
			<p className='font-normal leading-6 mb-4'>
				В настоящее время я{' '}
				<span className='text-title'>Junior Fullstack-разработчик.</span>
			</p>
			<p className='font-normal leading-6'>
				В свободное время я люблю смотреть фильмы, слушать музыку и проводить
				время с друзьями.
			</p>
		</div>
	)
}
