import { cn } from '@/lib/utils'
import React from 'react'
import { SwitchButton } from './switch-button'

interface Props {
	className?: string
}

export const SettingsHeader: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('fixed top-10 left-16', className)}>
			<div className='min-w-[62px]'>
				<SwitchButton />
			</div>
		</div>
	)
}
