import { motion, useViewportScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Access from './components/Access';
import DynamicBg from './components/DynamicBg';
import Foreground from './components/Foreground';
import Navbar from './components/Navbar';
import Techstack from './components/Techstack';
import { debounce } from 'lodash';

function Home() {
	const [showNav, setShowNav] = useState(true);
	const [scrollPrev, setScrollPrev] = useState(0);
	const { scrollY } = useViewportScroll();

	const handleScroll = debounce(() => {
		setShowNav(
			(scrollY.get() - scrollPrev > 30 && scrollY.get() < 100) ||
				scrollY.get() === 0 ||
				scrollY.get() - scrollPrev === 0
		),
			setScrollPrev(scrollY.get());
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollPrev]);

	return (
		<div className='home'>
			<div id='locator' />
			<motion.div
				animate={showNav ? { y: 0 } : { y: '-100%' }}
				transition={{ duration: 0.3, type: 'tween' }}
				className='home-nav'>
				<Navbar />
			</motion.div>
			<Parallax speed={-15} opacity={[4, 0, 'easeOut']} className='home-header'>
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
