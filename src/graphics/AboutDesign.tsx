import { motion } from 'framer-motion';
import React from 'react';

function AboutDesign({ x }: any) {
	return (
		<div className='about-svg'>
			<motion.img
				animate={{ x: `${x}%` }}
				transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
				src='/assets/about/pic5.png'
				className='about-svg-pic5'
			/>
			<img src='/assets/about/pic6.png' className='about-svg-pic6' />
			<motion.img
				animate={{ x: `${x / 1.7}%` }}
				transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
				src='/assets/about/pic1.png'
				className='about-svg-pic1'
			/>
			<motion.img
				animate={{ x: `${x / 10}%` }}
				transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
				src='/assets/about/pic2.png'
				className='about-svg-pic2'
			/>
			<motion.img
				animate={{ x: `${x / 1.7}%` }}
				transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
				src='/assets/about/pic3.png'
				className='about-svg-pic3'
			/>
			<motion.img
				animate={{ x: `${x / 10}%` }}
				transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
				src='/assets/about/pic4.png'
				className='about-svg-pic4'
			/>
			<motion.img
				animate={{ x: `${x / 6}%` }}
				transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
				src='/assets/about/pic0.png'
				className='about-svg-pic0'
			/>
		</div>
	);
}

export default AboutDesign;
