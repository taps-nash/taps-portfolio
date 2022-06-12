import { motion, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
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
			initial={{ opacity: 0, y: '-100%' }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5, duration: 1 }}
			className='navbar'>
			<div className='navbar-container'>
				{screenWidth < 800 ? (
					<img src='' />
				) : (
					<div className='navbar-container-links'>
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
							onClick={() => navigate('/about')}
							className='navbar-container-links-opt'>
							<h1>About Me</h1>
						</motion.div>
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
							onClick={() => navigate('/projects')}
							className='navbar-container-links-opt'>
							<h1>My Projects</h1>
						</motion.div>
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
							onClick={() => navigate('/designs')}
							className='navbar-container-links-opt'>
							<h1>My Designs</h1>
						</motion.div>
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
							onClick={() => navigate('/contact')}
							className='navbar-container-links-opt'>
							<h1>Contact Me</h1>
						</motion.div>
					</div>
				)}
				<img src='/assets/nut-logo.svg' />
			</div>
		</motion.div>
	);
}

export default Navbar;
