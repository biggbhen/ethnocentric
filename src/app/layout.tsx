import type { Metadata } from 'next';
import { Inter, Anton, Antonio } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/appLayout/Header';
import Footer from '@/app/components/appLayout/Footer';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const anton_init = Anton({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-anton',
});
const antonio_init = Antonio({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-antonio',
});
const aggrandir_grandheavy = localFont({
	src: [
		{
			path: '../../public/fonts/PPAgrandir-GrandHeavy.otf',
			// weight: '800',
		},
	],
	variable: '--font-aggrandir_grandheavy',
});

export const metadata: Metadata = {
	title: 'DechStudio',
	description: 'Developed by Ugochukwu Benjamin',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${anton_init.variable} ${antonio_init.variable} ${aggrandir_grandheavy.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
