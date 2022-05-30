import { motion, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Access from './components/Access';
import DynamicBg from './components/DynamicBg';
import Foreground from './components/Foreground';
import Navbar from './components/Navbar';
import Techstack from './components/Techstack';

function Home() {
	const scroll = useViewportScroll();
	const [stickNav, setStickNav] = useState(true);

	window.addEventListener('scroll', () =>
		setStickNav(scroll.scrollY.get() < 300)
	);

	return (
		<div className='home'>
			<div id='locator' />
			<motion.div
				animate={stickNav ? { y: 0 } : { y: '-100%' }}
				transition={{ duration: 0.5, type: 'tween' }}
				className='home-nav'>
				<Navbar />
			</motion.div>
			<Parallax speed={-15} className='home-header'>
				<DynamicBg />
				<Foreground />
			</Parallax>
			<Parallax speed={3} className='home-body'>
				<Techstack />
				<Access />
			</Parallax>
		</div>
	);
}

export default Home;
