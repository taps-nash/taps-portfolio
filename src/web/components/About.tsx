import { motion, useTransform, useViewportScroll } from 'framer-motion';
import AboutDesign from '../../graphics/AboutDesign';
import { useEffect, useState } from 'react';

function About() {
	const { scrollY } = useViewportScroll();
	const [limit, setLimit] = useState(false);
	const [vheight, setVHeight] = useState(window.innerHeight);
	const x = useTransform(
		scrollY,
		[vheight * 0, vheight * 3.6, vheight * 3.7, vheight * 3.8],
		[0, 0, 0, 500]
	);
	const [xVal, setXVal] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setXVal(x.get());
			scrollY.get() >= vheight * 6 ? setLimit(true) : setLimit(false);
		});
		window.addEventListener('resize', () => {
			setVHeight(window.innerHeight);
		});
		return () => {
			window.removeEventListener('scroll', () => {
				setXVal(x.get());
				x.get() >= vheight * 6 ? setLimit(true) : setLimit(false);
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
			</div>
			<motion.div
				initial={{
					opacity: 0,
					borderRight: '0rem groove #88a5a1',
				}}
				whileInView={{ opacity: 1 }}
				transition={{
					opacity: { duration: 1, type: 'tween' },
					borderRight:
						xVal >= 500
							? { delay: 0.5, duration: 0.3, type: 'tween' }
							: { duration: 0.1, type: 'tween' },
				}}
				animate={
					xVal >= 500
						? { borderRight: '1rem groove #88a5a1' }
						: { borderRight: '0rem groove #88a5a1' }
				}
				className='about-content'>
				<motion.div
					initial={{ opacity: 0, x: '-30%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, type: 'tween' }}
					className='about-content-container1'>
					<h1>15+</h1>
					<p>PROGRAMMING</p>
					<p>LANGUAGES</p>
					<p>EXPERIENCED</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '-30%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, type: 'tween' }}
					className='about-content-container2'>
					<h1>About Me</h1>
					<h2>Nash Uriel A. Tapayan</h2>
					<h3>BS Computer Engineering Student</h3>
					<p>
						I am a man who is passionate about his work, and I am always looking
						for new experiences, opportunities to grow, and challenges to
						overcome.{' '}
					</p>
					<p>
						I love learning new things and sharing my knowledge with other
						people. My primary passions are mentoring others, writing code, and
						taking photographs.
					</p>
				</motion.div>
			</motion.div>
			<div className='about-content2'>
				<div className='about-content2-container'>
					<h1>"I am fueled by passion and ignited by inquisite"</h1>
				</div>
			</div>
			<div className='about-footer'></div>
		</div>
	);
}

export default About;
