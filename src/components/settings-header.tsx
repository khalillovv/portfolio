import { cn } from '@/lib/utils'
import React from 'react'
import { SwitchButton } from './switch-button'

interface Props {
	className?: string
}

export const SettingsHeader: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'absolute top-3 left-5 md:top-8 md:left-12 lg:fixed lg:top-10 lg:left-8',
				className
			)}
		>
			<div className='min-w-[62px]'>
				<SwitchButton />
			</div>
		</div>
	)
}
