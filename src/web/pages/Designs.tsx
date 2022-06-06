import { motion } from 'framer-motion';
import { useState } from 'react';
import designs from '../../data/designs.json';
import Navbar2 from '../components/Navbar2';
import SvgDesign from '../../graphics/SvgDesign';
import { useNavigate } from 'react-router-dom';

function Designs() {
	const navigate = useNavigate();
	const [showMore1, setShowMore1] = useState(false);
	const [showMore2, setShowMore2] = useState(false);
	const [showMore3, setShowMore3] = useState(false);
	const [showMore4, setShowMore4] = useState(false);
	return (
		<div className='showcase'>
			<div className='showcase-navbar'>
				<Navbar2 />
			</div>
			<div className='showcase-header'>
				<motion.div
					initial={{ y: '5%', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.15, duration: 0.5, type: 'tween' }}
					className='showcase-header-text'>
					<h1>My Designs</h1>
					<p>
						These are my recent user interface designs as well as concept
						projects which I devised with software engineering solutions and
						project management plan procedures.
					</p>
				</motion.div>
				<div className='showcase-header-svg'>
					<SvgDesign className='showcase-header-svg-component' />
				</div>
			</div>
			<div className='showcase-content'>
				<motion.div
					initial={{ opacity: 0, x: '-50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						opacity: { duration: 1, type: 'tween' },
						x: { duration: 1, type: 'tween' },
						scale: { duration: 0.5, type: 'spring' },
					}}
					className='showcase-content-container'>
					<motion.div
						onHoverStart={() => setShowMore1(true)}
						onHoverEnd={() => setShowMore1(false)}
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${designs.at(0)?.param}`)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={designs.at(0)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{designs.at(0)?.name}</h1>
								<h2>
									{`${designs.at(0)?.fields.at(0)} ○ ${designs
										.at(0)
										?.fields.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{designs.at(0)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={showMore1 ? { opacity: 1, y: 0 } : {}}>
									Know more {'>>>'}
								</motion.h1>
							</div>
						</div>
					</motion.div>
					<div className='showcase-content-container-spacer' />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						opacity: { delay: 0.3, duration: 1, type: 'tween' },
						x: { delay: 0.3, duration: 1, type: 'tween' },
						scale: { duration: 0.5, type: 'spring' },
					}}
					className='showcase-content-container'>
					<div className='showcase-content-container-spacer' />
					<motion.div
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${designs.at(1)?.param}`)}
						onHoverStart={() => setShowMore2(true)}
						onHoverEnd={() => setShowMore2(false)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={designs.at(1)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{designs.at(1)?.name}</h1>
								<h2>
									{`${designs.at(1)?.fields.at(0)} ○ ${designs
										.at(1)
										?.fields.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{designs.at(1)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={showMore2 ? { opacity: 1, y: 0 } : {}}>
									Know more {'>>>'}
								</motion.h1>
							</div>
						</div>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '-50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						opacity: { duration: 1, type: 'tween' },
						x: { duration: 1, type: 'tween' },
						scale: { duration: 0.5, type: 'spring' },
					}}
					className='showcase-content-container'>
					<motion.div
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${designs.at(2)?.param}`)}
						onHoverStart={() => setShowMore3(true)}
						onHoverEnd={() => setShowMore3(false)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={designs.at(2)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{designs.at(2)?.name}</h1>
								<h2>
									{`${designs.at(2)?.fields.at(0)} ○ ${designs
										.at(2)
										?.fields.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{designs.at(2)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={showMore3 ? { opacity: 1, y: 0 } : {}}>
									Know more {'>>>'}
								</motion.h1>
							</div>
						</div>
					</motion.div>
					<div className='showcase-content-container-spacer' />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						opacity: { delay: 0.3, duration: 1, type: 'tween' },
						x: { delay: 0.3, duration: 1, type: 'tween' },
						scale: { duration: 0.5, type: 'spring' },
					}}
					className='showcase-content-container'>
					<div className='showcase-content-container-spacer' />
					<motion.div
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${designs.at(3)?.param}`)}
						onHoverStart={() => setShowMore2(true)}
						onHoverEnd={() => setShowMore2(false)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={designs.at(3)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{designs.at(3)?.name}</h1>
								<h2>
									{`${designs.at(3)?.fields.at(0)} ○ ${designs
										.at(3)
										?.fields.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{designs.at(3)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={showMore2 ? { opacity: 1, y: 0 } : {}}>
									Know more {'>>>'}
								</motion.h1>
							</div>
						</div>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '-50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						opacity: { duration: 1, type: 'tween' },
						x: { duration: 1, type: 'tween' },
						scale: { duration: 0.5, type: 'spring' },
					}}
					className='showcase-content-container'>
					<motion.div
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${designs.at(4)?.param}`)}
						onHoverStart={() => setShowMore3(true)}
						onHoverEnd={() => setShowMore3(false)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={designs.at(4)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{designs.at(4)?.name}</h1>
								<h2>
									{`${designs.at(4)?.fields.at(0)} ○ ${designs
										.at(4)
										?.fields.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{designs.at(4)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={showMore3 ? { opacity: 1, y: 0 } : {}}>
									Know more {'>>>'}
								</motion.h1>
							</div>
						</div>
					</motion.div>
					<div className='showcase-content-container-spacer' />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '50%' }}
					whileInView={{ opacity: 1, x: 0 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						opacity: { delay: 0.3, duration: 1, type: 'tween' },
						x: { delay: 0.3, duration: 1, type: 'tween' },
						scale: { duration: 0.5, type: 'spring' },
					}}
					className='showcase-content-container'>
					<div className='showcase-content-container-spacer' />
					<motion.div
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${designs.at(5)?.param}`)}
						onHoverStart={() => setShowMore2(true)}
						onHoverEnd={() => setShowMore2(false)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={designs.at(5)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{designs.at(5)?.name}</h1>
								<h2>
									{`${designs.at(5)?.fields.at(0)} ○ ${designs
										.at(5)
										?.fields.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{designs.at(5)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={showMore2 ? { opacity: 1, y: 0 } : {}}>
									Know more {'>>>'}
								</motion.h1>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Designs;
