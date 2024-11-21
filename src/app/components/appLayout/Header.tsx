'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../assets/DECHSTUDIO.png';
import logo2 from '../../../assets/Group 8.png';

type Props = {};

const Header = (props: Props) => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [prevScrollPos, setPrevScrollPos] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setIsScrolled(currentScrollPos > 100);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);
	return (
		<header
			className={`
		font-anton px-[60px] flex gap-x-[30px] justify-between fixed top-0 left-0 right-0 z-30 text-white py-[20px]
		${isScrolled && 'backdrop-blur-md'}
		${isScrolled && 'bg-black/50'}

	
		`}>
			<div className=''>
				<Link href={'/'}>
					{isScrolled ? (
						<Image src={logo2} alt='logo' width={200} height={200} />
					) : (
						<Image src={logo} alt='logo' width={500} height={300} />
					)}
				</Link>
			</div>
			<ul className='flex gap-x-[30px]'>
				<li className='hover:underline'>
					<Link href='/about'>ABOUT</Link>
				</li>
				<li className='hover:underline'>
					<Link href='/about'>WHY DECH?</Link>
				</li>
				<li className='hover:underline'>
					<Link href='/about'>PARTNERS</Link>
				</li>
				<li className='hover:underline'>
					<Link href='/about'>OUR PROCESS</Link>
				</li>
				<li className='hover:underline'>
					<Link href='/about'>CONTACT</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
