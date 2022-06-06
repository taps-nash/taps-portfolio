import { motion } from 'framer-motion';
import projects from '../../data/projects.json';
import SvgProject from '../../graphics/SvgProject';
import Navbar2 from '../components/Navbar2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Projects() {
	const navigate = useNavigate();
	const [hovered, setHovered] = useState(0);
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
					<h1>My Projects</h1>
					<p>
						These are the biggest projects I made for this year. I was
						responsible for leading the developement and designing of most of
						these projects.
					</p>
				</motion.div>
				<div className='showcase-header-svg'>
					<SvgProject className='showcase-header-svg-component' />
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
						onHoverStart={() => setHovered(1)}
						onHoverEnd={() => setHovered(0)}
						whileHover={{
							boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
							y: '-0.5rem',
						}}
						onTap={() => navigate(`${projects.at(0)?.param}`)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={projects.at(0)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{projects.at(0)?.name}</h1>
								<h2>
									{`${projects.at(0)?.languages.at(0)} ○ ${projects
										.at(0)
										?.languages.at(1)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{projects.at(0)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<div className='showcase-content-container-proj-details-footer-roles'>
									{projects
										.at(0)
										?.fields.slice(0, 2)
										.map((value) => (
											<div
												className='showcase-content-container-proj-details-footer-roles-component'
												key={value.name}>
												<div
													style={{ backgroundColor: value.color }}
													className='showcase-content-container-proj-details-footer-roles-component-circle'
												/>
												<h2> {value.name}</h2>
											</div>
										))}
								</div>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={hovered === 1 ? { opacity: 1, y: 0 } : {}}>
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
						onHoverStart={() => setHovered(2)}
						onHoverEnd={() => setHovered(0)}
						onTap={() => navigate(`${projects.at(1)?.param}`)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={projects.at(1)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{projects.at(1)?.name}</h1>
								<h2>
									{`${projects.at(1)?.languages.at(0)} ○ ${projects
										.at(1)
										?.languages.at(1)} ○ ${projects
										.at(1)
										?.languages.at(2)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{projects.at(1)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<div className='showcase-content-container-proj-details-footer-roles'>
									{projects
										.at(1)
										?.fields.slice(0, 2)
										.map((value) => (
											<div
												className='showcase-content-container-proj-details-footer-roles-component'
												key={value.name}>
												<div
													style={{ backgroundColor: value.color }}
													className='showcase-content-container-proj-details-footer-roles-component-circle'
												/>
												<h2> {value.name}</h2>
											</div>
										))}
								</div>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={hovered === 2 ? { opacity: 1, y: 0 } : {}}>
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
						onHoverStart={() => setHovered(3)}
						onHoverEnd={() => setHovered(0)}
						onTap={() => navigate(`${projects.at(2)?.param}`)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={projects.at(2)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{projects.at(2)?.name}</h1>
								<h2>
									{`${projects.at(2)?.languages.at(0)} ○ ${projects
										.at(2)
										?.languages.at(1)} ○ ${projects
										.at(2)
										?.languages.at(2)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{projects.at(2)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<div className='showcase-content-container-proj-details-footer-roles'>
									{projects
										.at(2)
										?.fields.slice(0, 2)
										.map((value) => (
											<div
												className='showcase-content-container-proj-details-footer-roles-component'
												key={value.name}>
												<div
													style={{ backgroundColor: value.color }}
													className='showcase-content-container-proj-details-footer-roles-component-circle'
												/>
												<h2> {value.name}</h2>
											</div>
										))}
								</div>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={hovered === 3 ? { opacity: 1, y: 0 } : {}}>
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
						onHoverStart={() => setHovered(4)}
						onHoverEnd={() => setHovered(0)}
						onTap={() => navigate(`${projects.at(3)?.param}`)}
						transition={{
							y: { duration: 0.3, type: 'spring', stiffness: 110 },
							boxShadow: { duration: 0.05, type: 'spring' },
						}}
						className='showcase-content-container-proj'>
						<img src={projects.at(3)?.icon} />
						<div className='showcase-content-container-proj-details'>
							<div className='showcase-content-container-proj-details-header'>
								<h1>{projects.at(3)?.name}</h1>
								<h2>
									{`${projects.at(3)?.languages.at(0)} ○ ${projects
										.at(3)
										?.languages.at(1)} ○ ${projects
										.at(3)
										?.languages.at(2)}`.toUpperCase()}
								</h2>
							</div>
							<div className='showcase-content-container-proj-details-body'>
								<p>{projects.at(3)?.description}</p>
							</div>
							<div className='showcase-content-container-proj-details-footer'>
								<div className='showcase-content-container-proj-details-footer-roles'>
									{projects
										.at(3)
										?.fields.slice(0, 2)
										.map((value) => (
											<div
												className='showcase-content-container-proj-details-footer-roles-component'
												key={value.name}>
												<div
													style={{ backgroundColor: value.color }}
													className='showcase-content-container-proj-details-footer-roles-component-circle'
												/>
												<h2> {value.name}</h2>
											</div>
										))}
								</div>
								<motion.h1
									initial={{ opacity: 0, y: '30%' }}
									animate={hovered === 4 ? { opacity: 1, y: 0 } : {}}>
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

export default Projects;
