import { motion, useTransform, useViewportScroll } from 'framer-motion';
import AboutDesign from '../../graphics/AboutDesign';
import { useEffect, useState } from 'react';

function About() {
	const { scrollY } = useViewportScroll();
	const [limit, setLimit] = useState(false);
	const [vheight, setVHeight] = useState(window.innerHeight);
	const x = useTransform(
		scrollY,
		[vheight * 0, vheight * 3.8, vheight * 3.9, vheight * 4],
		[0, 0, 0, 500]
	);
	const [xVal, setXVal] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setXVal(x.get());
			scrollY.get() >= vheight * 8 ? setLimit(true) : setLimit(false);
		});
		window.addEventListener('resize', () => {
			setVHeight(window.innerHeight);
		});
		return () => {
			window.removeEventListener('scroll', () => {
				setXVal(x.get());
				x.get() >= vheight * 8 ? setLimit(true) : setLimit(false);
			});
			window.addEventListener('resize', () => {
				setVHeight(window.innerHeight);
			});
		};
	});
	return (
		<div className='about' id='about'>
			<div className='about-scroll'>
				<motion.div
					animate={limit ? { x: '100%' } : { y: 0 }}
					transition={{ duration: 1, type: 'tween' }}
					className='about-scroll-wrapper'>
					<AboutDesign x={xVal} />
					<motion.h1
						initial={{ opacity: 0 }}
						animate={x.get() > 400 ? { opacity: 0 } : { opacity: 1 }}>
						I am passionate of what I do, and I love sharing it with others
					</motion.h1>
				</motion.div>
				<div className='about-scroll-content'></div>
			</div>
		</div>
	);
}

export default About;
