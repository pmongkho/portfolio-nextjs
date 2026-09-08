import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL('https://eddymongkhonvilay.dev'),
	title: 'Phongsavanh “Eddy” Mongkhonvilay | .NET Full-Stack Software Engineer',
	description: 'Full-stack software engineer specializing in C#, ASP.NET Core, Angular, PostgreSQL, SQL Server, and Azure. Building enterprise applications, operational systems, APIs, and business automation.',
	openGraph: {
		title: 'Phongsavanh “Eddy” Mongkhonvilay | .NET Full-Stack Software Engineer',
		description: 'Full-stack software engineer specializing in C#, ASP.NET Core, Angular, PostgreSQL, SQL Server, and Azure.',
		url: 'https://eddymongkhonvilay.dev', type: 'website', siteName: 'Eddy Mongkhonvilay',
	},
	robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body>
				{children}
			</body>
		</html>
	)
}
