import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				'flex flex-col justify-between h-screen lg:w-1/2 lg:py-24', // Используем h-screen для растяжения на весь экран
				className
			)}
		>
			{/* Верхняя часть */}
			<div>
				<Link
					href={DASHBOARD_PAGES.HOME}
					className='text-3xl text-title font-bold tracking-tight sm:text-4xl'
				>
					Khalilov Oleksandr
				</Link>
				<h2 className='mt-3 text-lg text-title font-medium tracking-tight sm:text-xl'>
					Full Stack Developer
				</h2>
				<p className='text-text font-normal mt-4 max-w-xs leading-normal'>
					I build accessible, pixel-perfect digital experiences for the web.
				</p>
				<nav className='nav hidden lg:block'>
					<ul className='mt-16 w-max'>
						<li>
							<a className='group flex items-center py-3' href='#about'>
								<span className='nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-title group-focus-visible:w-16 group-focus-visible:bg-title motion-reduce:transition-none'></span>
								<span className='nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-title group-focus-visible:text-title'>
									About
								</span>
							</a>
						</li>
						<li>
							<a className='group flex items-center py-3' href='#projects'>
								<span className='nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-title group-focus-visible:w-16 group-focus-visible:bg-title motion-reduce:transition-none'></span>
								<span className='nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-title group-focus-visible:text-title'>
									Projects
								</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			{/* Нижняя часть */}
			<div>
				<Link
					href={DASHBOARD_PAGES.GITHUB}
					target='_blank'
					className='ml-1 inline-block hover:text-title transition-colors'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='h-6 w-6'
						aria-hidden='true'
					>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
					</svg>
				</Link>
			</div>
		</header>
	)
}
