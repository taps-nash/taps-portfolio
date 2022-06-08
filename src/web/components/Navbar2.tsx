import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';

import data from '../../data/details.json';

function Navbar2({ use }: any) {
	const { id } = useParams();
	console.log(use);
	const index = data.findIndex((value) => {
		return value.param === id;
	});

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
			className='navbar'
			style={
				use === 'normal'
					? { backgroundColor: 'white' }
					: { backgroundColor: data.at(index)?.theme }
			}>
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
						use === 'normal' ? navigate('/access') : navigate(-1);
					}}
					className='navbar-container-back'>
					<TiArrowBack
						size={'1.5rem'}
						color={use === 'normal' ? '#3A485D' : 'white'}
					/>
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
					src={
						use === 'normal'
							? '/assets/nut-logo.svg'
							: '/assets/nut-logo-white.svg'
					}
					className='navbar-container-home'
				/>
			</div>
		</motion.div>
	);
}

export default Navbar2;
