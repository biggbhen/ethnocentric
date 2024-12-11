
import AboutUs from './components/AboutUs';
import  HeroComponent  from './components/HeroComponent';

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<HeroComponent />
			<AboutUs />
		</main>
	);
}
