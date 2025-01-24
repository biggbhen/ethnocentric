import type { Metadata } from 'next';
import { Inter, Manrope, Ubuntu } from 'next/font/google';
import './globals.css';
import Header from '@/components/appLayout/Header';
import Footer from '@/components/appLayout/Footer';



const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-ubuntu',
});

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-manrope',
});

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: 'Fashion Future Program',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<link rel='icon' href='/favicon.ico' sizes='any' />
			<body className={`${ubuntu.variable} ${manrope.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
