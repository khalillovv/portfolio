'use client'
import React, { useState } from 'react'

interface HighlightContainerProps {
	children: React.ReactNode
}

export const HighlightContainer: React.FC<HighlightContainerProps> = ({
	children,
}) => {
	const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 })

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const { left, top, width, height } =
			event.currentTarget.getBoundingClientRect()
		const x = ((event.clientX - left) / width) * 100
		const y = ((event.clientY - top) / height) * 100
		setGradientPosition({ x, y })
	}

	const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024

	return (
		<div
			className='highlight-container'
			style={{
				background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgb(18, 32, 68, 1), transparent 40%)`,
			}}
			onMouseMove={isDesktop ? handleMouseMove : undefined}
		>
			{children}
		</div>
	)
}
