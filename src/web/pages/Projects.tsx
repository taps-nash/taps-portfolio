import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import projects from '../../data/projects.json';
import SvgProject from './../../scss/graphics/SvgProject';
import Navbar from '../components/Navbar';

function Projects() {
	const navigate = useNavigate();
	return (
		<div className='projects'>
			<Navbar />
			<div className='projects-header'>
				<div className='projects-header-container'>
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						className='projects-header-container-row1'>
						<div className='projects-header-container-row1-links'></div>
					</motion.div>
					<motion.div
						initial={{ x: '-5%', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.15, duration: 0.5, type: 'tween' }}
						className='projects-header-container-row2'>
						<h1>My Projects</h1>
						<p>
							These are the 3 big recent projects I developed for the past year.
							I lead the frontend development of these projects as well as the
							designing of their UI/UX.
						</p>
					</motion.div>
				</div>
				<div className='projects-header-svg'>
					<SvgProject className='projects-header-svg-component' />
				</div>
			</div>
			<div className='projects-body'>
				<div className='projects-body-container'>
					<motion.div
						initial={{ opacity: 0, x: '-50%' }}
						whileInView={{ opacity: 1, x: 0 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							opacity: { duration: 1, type: 'tween' },
							x: { duration: 1, type: 'tween' },
							scale: { duration: 0.5, type: 'spring' },
						}}
						className='projects-body-container-proj'>
						<div className='projects-body-container-proj-content'>
							<img src={projects.at(0)?.icon} />
							<div className='projects-body-container-proj-content-details'>
								<div className='projects-body-container-proj-content-details-header'>
									<h1>{projects.at(0)?.name}</h1>
									<h2>
										{`${projects.at(0)?.languages.at(0)} ○ ${projects
											.at(0)
											?.languages.at(1)}`.toUpperCase()}
									</h2>
								</div>
								<div className='projects-body-container-proj-content-details-body'>
									<p>{projects.at(0)?.description?.at(0)}</p>
								</div>
								<div className='projects-body-container-proj-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
						<div className='projects-body-container-spacer' />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: '50%' }}
						whileInView={{ opacity: 1, x: 0 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							opacity: { duration: 1, type: 'tween' },
							x: { duration: 1, type: 'tween' },
							scale: { duration: 0.5, type: 'spring' },
						}}
						className='projects-body-container-proj'>
						<div className='projects-body-container-spacer' />
						<div className='projects-body-container-proj-content'>
							<img src={projects.at(1)?.icon} />
							<div className='projects-body-container-proj-content-details'>
								<div className='projects-body-container-proj-content-details-header'>
									<h1>{projects.at(1)?.name}</h1>
									<h2>
										{`${projects.at(1)?.languages.at(0)} ○
										${projects.at(1)?.languages.at(1)} ○
										${projects.at(1)?.languages.at(2)}`.toUpperCase()}
									</h2>
								</div>
								<div className='projects-body-container-proj-content-details-body'>
									<p>{projects.at(1)?.description?.at(0)}</p>
								</div>
								<div className='projects-body-container-proj-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
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
						className='projects-body-container-proj'>
						<div className='projects-body-container-proj-content'>
							<img src={projects.at(3)?.icon} />
							<div className='projects-body-container-proj-content-details'>
								<div className='projects-body-container-proj-content-details-header'>
									<h1>{projects.at(3)?.name}</h1>
									<h2>
										{`${projects.at(3)?.languages.at(0)} ○
										${projects.at(3)?.languages.at(1)} ○
										${projects.at(3)?.languages.at(2)}`.toUpperCase()}
									</h2>
								</div>
								<div className='projects-body-container-proj-content-details-body'>
									<p>{projects.at(3)?.description?.at(0)}</p>
								</div>
								<div className='projects-body-container-proj-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
						<div className='projects-body-container-spacer' />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: '50%' }}
						whileInView={{ opacity: 1, x: 0 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							opacity: { duration: 1, type: 'tween' },
							x: { duration: 1, type: 'tween' },
							scale: { duration: 0.5, type: 'spring' },
						}}
						className='projects-body-container-proj'>
						<div className='projects-body-container-spacer' />
						<div className='projects-body-container-proj-content'>
							<img src={projects.at(4)?.icon} />
							<div className='projects-body-container-proj-content-details'>
								<div className='projects-body-container-proj-content-details-header'>
									<h1>{projects.at(4)?.name}</h1>
									<h2>
										{`${projects.at(4)?.languages.at(0)} ○
										${projects.at(4)?.languages.at(1)} ○
										${projects.at(4)?.languages.at(2)}`.toUpperCase()}
									</h2>
								</div>
								<div className='projects-body-container-proj-content-details-body'>
									<p>{projects.at(4)?.description?.at(0)}</p>
								</div>
								<div className='projects-body-container-proj-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
