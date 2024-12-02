import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	return (
		<div id='about' className={cn('', className)}>
			<p className='font-normal leading-6 mb-4'>
				Я розробник, захоплений створенням доступних, ідеальних до пікселя
				інтерфейсів користувача. Мені подобається поєднувати продуманий дизайн з
				надійною функціональністю, створюючи додатки, які вражають не лише
				зовнішнім виглядом, а й зручністю використання. Особливо надихає робота
				на перетині дизайну та розробки, де народжуються проекти, що поєднують
				естетику, продуктивність та практичність.
			</p>
			<p className='font-normal leading-6 mb-4'>
				На даний момент я{' '}
				<span className='text-title font-semibold'>
					Junior Fullstack-розробник.
				</span>
			</p>
			<p className='font-normal leading-6'>
				У вільний час я люблю дивитися фільми, слухати музику та проводити час з
				друзями.
			</p>
		</div>
	)
}
