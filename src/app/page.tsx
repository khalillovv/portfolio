import { Content, Header } from '@/components'

export default function Home() {
	return (
		<div className='flex flex-row gap-4'>
			<Header className='w-1/2' />
			<Content className='w-1/2' />
		</div>
	)
}
