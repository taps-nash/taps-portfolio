import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Foreground() {
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
		<div className='foreground'>
			<div className='foreground-group'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8, duration: 1.5, ease: 'easeInOut' }}
					className='foreground-group-sec1 img-parallax'
					data-value='1.5'>
					<div className='foreground-group-sec1-container1'>
						<div className='foreground-group-sec1-container1-header'>
							<h1 className='foreground-group-sec1-container1-header-text'>
								¡Hola! I'm
							</h1>
							<h1 className='foreground-group-sec1-container1-header-name'>
								Nash,
							</h1>
						</div>
						<h2>and I am a passionate full-stack developer! </h2>
					</div>
					<div className='foreground-group-sec1-container2'>
						{screenWidth > 767 ? (
							<p>
								I design and implement desktop, web and mobile applications
								across various programming languages and frameworks. Experienced
								in cross platform implementations, project management, UI
								designing, and full-stack development.
							</p>
						) : (
							<p style={{ textAlign: 'center' }}>
								I design and implement desktop, web and mobile applications
								across various programming languages and frameworks.
							</p>
						)}
					</div>
				</motion.div>
				<div className='foreground-group-sec2 img-parallax' data-value='1.5'>
					<div className='foreground-group-sec2-links'>
						<motion.div
							initial={{ y: '100%', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 2, duration: 0.5, type: 'spring' }}
							className='foreground-group-sec2-links-group'>
							<img
								src='/assets/github.svg'
								onClick={() =>
									window.location.assign('https://github.com/taps-nash')
								}
							/>
							{screenWidth > 479 && (
								<a
									onClick={() =>
										window.location.assign('https://github.com/taps-nash')
									}>
									github.com/taps-nash
								</a>
							)}
						</motion.div>
						<motion.div
							initial={{ y: '100%', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 2.4, duration: 0.5, type: 'spring' }}
							className='foreground-group-sec2-links-group'>
							<img
								src='/assets/linkedin.svg'
								onClick={() =>
									window.location.assign(
										'https://www.linkedin.com/in/nash-tapayan/'
									)
								}
							/>
							{screenWidth > 479 && (
								<a
									onClick={() =>
										window.location.assign(
											'https://www.linkedin.com/in/nash-tapayan/'
										)
									}>
									linkedin.com/in/nash-tapayan
								</a>
							)}
						</motion.div>
						<motion.div
							initial={{ y: '100%', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 2.6, duration: 0.5, type: 'spring' }}
							className='foreground-group-sec2-links-group'>
							<img
								src='/assets/facebook.svg'
								onClick={() =>
									window.location.assign('https://facebook.com/nashtaps')
								}
							/>
							{screenWidth > 479 && (
								<a
									onClick={() =>
										window.location.assign('https://facebook.com/nashtaps')
									}>
									facebook.com/nashtaps
								</a>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Foreground;
