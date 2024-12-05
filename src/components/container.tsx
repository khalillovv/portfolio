import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<div
			className={cn(
				'mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0',
				className
			)}
		>
			{children}
		</div>
	)
}
