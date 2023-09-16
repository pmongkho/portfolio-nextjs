import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eddy Mongkhonvilay',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-slate-800 text-white h-full px-10 pt-20 text-base font-roboto`}
			>
				{children}
			</body>
		</html>
	)
}
