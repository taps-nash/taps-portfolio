import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';

function Navbar2() {
	const navigate = useNavigate();
	const { ref, inView } = useInView({
		threshold: 0.45,
		triggerOnce: false,
	});
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const handleResize = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		window.addEventListener('load', handleResize);
		return () => {
			window.addEventListener('resize', handleResize);
			window.addEventListener('load', handleResize);
		};
	});
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: '-20%' }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='navbar'>
			<div className='navbar-container'>
				<motion.div
					initial={{ y: 0 }}
					whileHover={{
						y: '-0.20rem',
					}}
					whileTap={{
						y: '0.20rem',
					}}
					transition={{
						y: { duration: 0.15, type: 'spring', stiffness: 120 },
					}}
					onClick={() => {
						navigate(-1);
					}}
					className='navbar-container-back'>
					<TiArrowBack size={'1.5rem'} color={'#3A485D'} />
				</motion.div>
				<motion.img
					initial={{ y: 0 }}
					whileHover={{
						y: '-0.20rem',
					}}
					whileTap={{
						y: '0.15rem',
					}}
					transition={{
						y: { duration: 0.15, type: 'spring', stiffness: 120 },
					}}
					onClick={() => navigate('/')}
					src='/assets/nut-logo.svg'
					className='navbar-container-home'
				/>
			</div>
		</motion.div>
	);
}

export default Navbar2;
