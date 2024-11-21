import HeroComponent from '@/app/components/HeroComponent';
import Image from 'next/image';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import OurProcess from './components/OurProcess';
import Partners from './components/Partners';

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<HeroComponent />
			<AboutUs />
			<Services />
			<Partners />
			<OurProcess />
			<Contact />
		</main>
	);
}
