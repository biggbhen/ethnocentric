import type { Metadata } from 'next';
import { Inter, Anton, Antonio, Manrope, Ubuntu } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/appLayout/Header';
import Footer from '@/app/components/appLayout/Footer';
import localFont from 'next/font/local';


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
	description: 'Developed by Ugochukwu Benjamin',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${ubuntu.variable} ${manrope.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
