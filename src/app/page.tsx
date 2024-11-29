import { Content, Header } from '@/components'

export default function Home() {
	return (
		<div className='flex flex-row gap-4'>
			<Header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24' />
			<Content className='lg:w-1/2' />
		</div>
	)
}
