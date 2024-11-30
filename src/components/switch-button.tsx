'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import styles from './SwitchButton.module.css'

interface Props {
	className?: string
}

export const SwitchButton: React.FC<Props> = ({ className }) => {
	const [isDark, setIsDark] = useState(true)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			setIsDark(savedTheme === 'dark')
		} else {
			const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'
			setIsDark(defaultTheme === 'dark')
		}
	}, [])

	useEffect(() => {
		if (isClient) {
			const theme = isDark ? 'dark' : 'light'
			localStorage.setItem('theme', theme)
			document.documentElement.setAttribute('data-theme', theme)
		}
	}, [isDark, isClient])

	const toggleSwitch = () => {
		setIsDark(prev => !prev)
	}

	if (!isClient) {
		return null
	}

	return (
		<div
			id='switch'
			className={cn(
				`${styles.switch} ${isDark ? styles.dark : styles.light} ${className}`
			)}
			onClick={toggleSwitch}
		>
			<div id='contentwrapper' className={styles.contentWrapper}>
				<div id='circle' className={styles.circle}></div>
				<div id='stars' className={styles.stars}>
					<div id='shtngstarwrapper' className={styles.shootingStarWrapper}>
						<div id='shootingstar' className={styles.shootingStar}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
