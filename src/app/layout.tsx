import { Container, HighlightContainer } from '@/components'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	variable: '--font-inter',
	style: ['normal'],
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Khalilov Oleksandr Portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' data-theme='dark'>
			<head>
				<link data-rh='true' rel='icon' href='/logo.png' />
			</head>
			<body className={inter.className}>
				<main>
					<HighlightContainer>
						<Container>{children}</Container>
					</HighlightContainer>
				</main>
			</body>
		</html>
	)
}
