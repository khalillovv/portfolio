'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './loading-screen-motion.module.css'

export const LoadingScreenMotion = () => {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		if (isVisible) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		const timer = setTimeout(() => {
			setIsVisible(false)
		}, 3000)

		return () => {
			clearTimeout(timer)
			document.body.classList.remove('overflow-hidden')
		}
	}, [isVisible])

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={styles.loading_screen}
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<div className={styles.stars}>
						<div className={styles.star1}></div>
						<div className={styles.star2}></div>
						<div className={styles.star3}></div>
					</div>
					<motion.h1
						className={cn(
							'flex flex-col gap-4 lg:flex-row lg:gap-0 lg:items-baseline',
							styles.loading_text
						)}
						initial={{ scale: 1, opacity: 0 }}
						animate={{ scale: 1.5, opacity: 1 }}
						exit={{ scale: 1.8, opacity: 0 }}
						transition={{
							duration: 2.5,
							ease: 'easeInOut',
						}}
					>
						<span className='text-[44px] md:text-[64px] lg:text-[80px]'>
							khalilov
						</span>
						<span className='text-[12px] md:text-sm'>Portfolio</span>
					</motion.h1>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
