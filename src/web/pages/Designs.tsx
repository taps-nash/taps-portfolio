import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import designs from '../../data/designs.json';
import projects from '../../data/projects.json';
import SvgDesign from './../../scss/graphics/SvgDesign';

function Designs() {
	const navigate = useNavigate();
	return (
		<div className='designs'>
			<div className='designs-header'>
				<div className='designs-header-container'>
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						className='designs-header-container-row1'>
						<div className='designs-header-container-row1-links'>
							<motion.div
								whileHover={{
									y: '-0.15rem',
								}}
								whileTap={{
									y: '0.15rem',
								}}
								transition={{
									y: { duration: 0.15, type: 'tween' },
								}}
								onClick={() => navigate('/')}
								className='designs-header-container-row1-links-opt'>
								<h1>Home</h1>
							</motion.div>
							<motion.div
								whileHover={{
									y: '-0.15rem',
								}}
								whileTap={{
									y: '0.15rem',
								}}
								transition={{
									y: { duration: 0.15, type: 'tween' },
								}}
								onClick={() => navigate('/about')}
								className='designs-header-container-row1-links-opt'>
								<h1>About Me</h1>
							</motion.div>
							<motion.div
								whileHover={{
									y: '-0.15rem',
								}}
								whileTap={{
									y: '0.15rem',
								}}
								transition={{
									y: { duration: 0.15, type: 'tween' },
								}}
								onClick={() => navigate('/projects')}
								className='designs-header-container-row1-links-opt'>
								<h1>My projects</h1>
							</motion.div>
							<motion.div
								whileHover={{
									y: '-0.15rem',
								}}
								whileTap={{
									y: '0.15rem',
								}}
								transition={{
									y: { duration: 0.15, type: 'tween' },
								}}
								onClick={() => navigate('/contact')}
								className='designs-header-container-row1-links-opt'>
								<h1>Contact Me</h1>
							</motion.div>
							<img
								src='/src/assets/nut-logo.svg'
								className='designs-header-container-row1-watermark'
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: '-5%', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.15, duration: 0.5, type: 'tween' }}
						className='designs-header-container-row2'>
						<h1>My Designs</h1>
					</motion.div>
				</div>
				<div className='designs-header-svg'>
					<SvgDesign className='designs-header-svg-component' />
				</div>
			</div>
			<div className='designs-body'>
				<div className='designs-body-container'>
					<div className='designs-body-container-proj1'>
						<div className='designs-body-container-proj1-content'>
							<img src={designs.at(0)?.icon} />
							<div className='designs-body-container-proj1-content-details'>
								<div className='designs-body-container-proj1-content-details-header'>
									<h1>{designs.at(0)?.name}</h1>
									<h2>
										{`${designs.at(0)?.languages.at(0)} ○ ${designs
											.at(0)
											?.languages.at(1)}`.toUpperCase()}
									</h2>
								</div>
								<div className='designs-body-container-proj1-content-details-body'>
									<p>{designs.at(0)?.description?.at(0)}</p>
									<p>{designs.at(0)?.description?.at(1)}</p>
								</div>
								<div className='designs-body-container-proj1-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
						<div className='designs-body-container-spacer' />
					</div>
					<div className='designs-body-container-proj2'>
						<div className='designs-body-container-spacer' />
						<div className='designs-body-container-proj2-content'>
							<img src={designs.at(1)?.icon} />
							<div className='designs-body-container-proj2-content-details'>
								<div className='designs-body-container-proj2-content-details-header'>
									<h1>{designs.at(1)?.name}</h1>
									<h2>
										{`${designs.at(1)?.languages.at(0)} ○
										${designs.at(1)?.languages.at(1)}`.toUpperCase()}
									</h2>
								</div>
								<div className='designs-body-container-proj2-content-details-body'>
									<p>{designs.at(1)?.description?.at(0)}</p>
									<p>{designs.at(1)?.description?.at(1)}</p>
								</div>
								<div className='designs-body-container-proj2-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
					</div>
					<div className='designs-body-container-proj3'>
						<div className='designs-body-container-proj3-content'>
							<img src={designs.at(2)?.icon} />
							<div className='designs-body-container-proj3-content-details'>
								<div className='designs-body-container-proj3-content-details-header'>
									<h1>{designs.at(2)?.name}</h1>
									<h2>
										{`${designs.at(2)?.languages.at(0)} ○
										${designs.at(2)?.languages.at(1)}`.toUpperCase()}
									</h2>
								</div>
								<div className='designs-body-container-proj3-content-details-body'>
									<p>{designs.at(2)?.description?.at(0)}</p>
								</div>
								<div className='designs-body-container-proj3-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
						<div className='designs-body-container-spacer' />
					</div>
					<div className='designs-body-container-proj4'>
						<div className='designs-body-container-proj4-content'>
							<img src={projects.at(0)?.icon} />
							<div className='designs-body-container-proj4-content-details'>
								<div className='designs-body-container-proj4-content-details-header'>
									<h1>{projects.at(0)?.name}</h1>
									<h2>
										{`${projects.at(0)?.languages.at(0)} ○ ${projects
											.at(0)
											?.languages.at(1)}`.toUpperCase()}
									</h2>
								</div>
								<div className='designs-body-container-proj4-content-details-body'>
									<p>{projects.at(0)?.description?.at(0)}</p>
									<p>{projects.at(0)?.description?.at(1)}</p>
								</div>
								<div className='designs-body-container-proj4-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
						<div className='designs-body-container-spacer' />
					</div>
					<div className='designs-body-container-proj5'>
						<div className='designs-body-container-spacer' />
						<div className='designs-body-container-proj5-content'>
							<img src={projects.at(1)?.icon} />
							<div className='designs-body-container-proj5-content-details'>
								<div className='designs-body-container-proj5-content-details-header'>
									<h1>{projects.at(1)?.name}</h1>
									<h2>
										{`${projects.at(1)?.languages.at(0)} ○
										${projects.at(1)?.languages.at(1)} ○
										${projects.at(1)?.languages.at(2)}`.toUpperCase()}
									</h2>
								</div>
								<div className='designs-body-container-proj5-content-details-body'>
									<p>{projects.at(1)?.description?.at(0)}</p>
									<p>{projects.at(1)?.description?.at(1)}</p>
								</div>
								<div className='designs-body-container-proj5-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
					</div>
					<div className='designs-body-container-proj6'>
						<div className='designs-body-container-proj6-content'>
							<img src={projects.at(3)?.icon} />
							<div className='designs-body-container-proj6-content-details'>
								<div className='designs-body-container-proj6-content-details-header'>
									<h1>{projects.at(3)?.name}</h1>
									<h2>
										{`${projects.at(3)?.languages.at(0)} ○
										${projects.at(3)?.languages.at(1)} ○
										${projects.at(3)?.languages.at(2)}`.toUpperCase()}
									</h2>
								</div>
								<div className='designs-body-container-proj6-content-details-body'>
									<p>{projects.at(3)?.description?.at(0)}</p>
									<p>{projects.at(3)?.description?.at(1)}</p>
								</div>
								<div className='designs-body-container-proj6-content-details-footer'>
									<h1>Know more {'>>>'}</h1>
								</div>
							</div>
						</div>
						<div className='designs-body-container-spacer' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Designs;
