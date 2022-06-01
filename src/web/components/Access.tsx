import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import ProjectHover from '../../graphics/ProjectHover';
import DesignHover from '../../graphics/DesignHover';
import { useNavigate } from 'react-router-dom';

function Access() {
	const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
	const [isAnimation2Playing, setIsAnimation2Playing] = useState(false);
	const [showNotice1, setShowNotice1] = useState(false);
	const [showNotice2, setShowNotice2] = useState(false);
	const navigate = useNavigate();
	const svgAnimationControls = useAnimation();
	const svgAnimationControls2 = useAnimation();

	return (
		<div className='access'>
			<div className='access-container'>
				<motion.div
					onHoverStart={() => {
						setShowNotice1(true);
						if (!isAnimationPlaying) {
							setIsAnimationPlaying(true);
							svgAnimationControls.start({ scale: [1, 1.05, 1] });
						}
					}}
					onHoverEnd={() => setShowNotice1(false)}
					whileHover={{
						boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
						y: '-0.5rem',
					}}
					whileTap={{
						boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
						y: 10,
					}}
					onTap={() => navigate('/projects')}
					initial={{ opacity: 0, x: '-50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						y: { duration: 0.3, type: 'spring', stiffness: 110 },
						boxShadow: { duration: 0.05, type: 'spring' },
						x: { duration: 1, type: 'tween', ease: 'easeInOut' },
					}}
					className='access-container-row1'>
					<div className='access-container-row1-col1'>
						<h1>My Projects</h1>
						<h2>
							These are my biggest projects for this year. I was responsible for
							leading the frontend development as well as designing the user
							interface of these projects.
						</h2>
						<motion.h3 animate={showNotice1 ? { opacity: 1 } : { opacity: 0 }}>
							Show Details {'>>>'}
						</motion.h3>
					</div>
					<div className='access-container-row1-col2'>
						<ProjectHover
							svgAnimationControls={svgAnimationControls}
							setIsAnimationPlaying={setIsAnimationPlaying}
						/>
					</div>
				</motion.div>
				<motion.div
					onHoverStart={() => {
						setShowNotice2(true);
						if (!isAnimation2Playing) {
							setIsAnimation2Playing(true);
							svgAnimationControls2.start({ scale: [1, 1.05, 1] });
						}
					}}
					onHoverEnd={() => setShowNotice2(false)}
					whileHover={{
						boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
						y: '-0.5rem',
					}}
					whileTap={{
						boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
						y: 10,
					}}
					onTap={() => navigate('/designs')}
					initial={{ opacity: 0, x: '50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						y: { duration: 0.3, type: 'spring', stiffness: 110 },
						boxShadow: { duration: 0.05, type: 'spring' },
						x: {
							delay: 0.3,
							duration: 1,
							type: 'tween',
							ease: 'easeInOut',
						},
					}}
					className='access-container-row2'>
					<div className='access-container-row2-col1'>
						<DesignHover
							svgAnimationControls={svgAnimationControls2}
							setIsAnimationPlaying={setIsAnimation2Playing}
						/>
					</div>
					<div className='access-container-row2-col2'>
						<h1>My Designs</h1>
						<h2>
							Aside from being commited to frontend development, I also
							engineered various projects involving web and mobile applications,
							responsive layouts, and even 3D design models.
						</h2>
						<motion.h3 animate={showNotice2 ? { opacity: 1 } : { opacity: 0 }}>
							Show Details {'>>>'}
						</motion.h3>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Access;
