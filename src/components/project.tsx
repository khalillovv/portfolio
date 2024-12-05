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
	development?: string
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
	development,
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
				<td className='flex flex-row gap-1 lg:block pr-4 pt-5 pb-6 text-title font-semibold leading-[22px]'>
					<div className='md:hidden'>
						{link ? (
							<Link className='flex flex-row gap-1' href={link} target='_blank'>
								{title}
								<ArrowUpRight width={15} height={15} />
							</Link>
						) : (
							<span>{title}</span>
						)}
					</div>
					<div className='hidden md:block'>{title}</div>
				</td>
				<td className='hidden lg:table-cell pr-4 pt-5 pb-6'>
					<p>{development}</p>
				</td>
				<td className='hidden lg:table-cell pr-4 pt-5 pb-6 text-primary'>
					<div className='flex flex-row flex-wrap gap-2'>
						{build?.map(b => (
							<p
								key={b}
								className='text-[12px] px-3 py-2 bg-backgroundPrimary rounded-full'
							>
								{b}
							</p>
						))}
					</div>
				</td>
				<td className='hidden md:table-cell pr-4 pt-5 pb-6'>
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
				'rounded-lg cursor-pointer transition-all lg:p-6 hover:bg-projectBg group',
				className
			)}
		>
			<Link href={`${link}`} target='_blank'>
				<div
					className={cn('flex flex-col-reverse md:flex-row gap-6', className)}
				>
					<div className='flex-shrink-0'>
						{image && (
							<Image
								width={200}
								height={114}
								src={image}
								alt={title}
								className='object-cover lg:w-[120px] border'
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
						<h3 className='mt-2 text-xs font-normal leading-[21px]  lg:leading-[20px]'>
							{description}
						</h3>
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
