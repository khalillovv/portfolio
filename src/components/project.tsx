import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
	image?: string
	year?: string
	title: string
	description?: string
	build?: string[]
	linkName?: string
	link?: string
	hasArchive?: boolean
	className?: string
}

export const Project: React.FC<Props> = ({
	year,
	image,
	title,
	description,
	build,
	linkName,
	link,
	hasArchive,
	className,
}) => {
	if (hasArchive) {
		return (
			<tr className='align-top border-b border-gray-600 border-opacity-10'>
				<td className='pr-4 pt-5 pb-6 font-normal text-xs'>{year}</td>
				<td className='pr-4 pt-5 pb-6 text-title font-semibold leading-[22px]'>
					{title}
				</td>
				<td className='pr-4 pt-5 pb-6 flex flex-row flex-wrap gap-2 text-primary'>
					{build?.map(b => (
						<p
							key={b}
							className='text-[12px] px-3 py-2 bg-backgroundPrimary rounded-full'
						>
							{b}
						</p>
					))}
				</td>
				<td className='pr-4 pt-5 pb-6'>
					{link && (
						<Link
							href={link}
							target='_blank'
							className='flex flex-row gap-1 text-xs leading-[18px] hover:text-primary group'
						>
							{linkName}
							<ArrowUpRight
								width={15}
								height={15}
								className='transition-all transform translate-y-0.5 group-hover:translate-x-1 group-hover:translate-y-0'
							/>
						</Link>
					)}
				</td>
			</tr>
		)
	}

	return (
		<div
			id='projects'
			className={cn(
				'w-[536px] rounded-lg cursor-pointer transition-all hover:bg-gray-700 hover:bg-opacity-10 group',
				className
			)}
		>
			<Link href={`${link}`} target='_blank'>
				<div className={cn('flex flex-row px-6 py-5 gap-4 ', className)}>
					<div className='flex-shrink-0'>
						{image && (
							<Image
								width={120}
								height={48}
								src={image}
								alt={title}
								className='object-cover'
							/>
						)}
					</div>
					<div className='relative flex-1'>
						<div className='flex flex-row gap-2 text-title group-hover:text-primary'>
							<h2>{title}</h2>
							<ArrowUpRight
								width={16}
								height={16}
								className='transition-transform transform translate-x-0 translate-y-1 group-hover:translate-x-1 group-hover:translate-y-0'
							/>
						</div>
						<h3 className='mt-2'>{description}</h3>
						<div className='flex flex-row flex-wrap gap-2 mt-3 text-primary'>
							{build?.map(b => (
								<p
									key={b}
									className='text-[12px] px-3 py-2 bg-backgroundPrimary rounded-full'
								>
									{b}
								</p>
							))}
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}
