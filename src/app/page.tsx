import { Content, Header } from '@/components'

export default function Home() {
	return (
		<div className='flex flex-col lg:flex-row lg:gap-4'>
			<Header className='lg:sticky lg:top-0' />
			<Content className='lg:w-1/2' />
		</div>
	)
}
