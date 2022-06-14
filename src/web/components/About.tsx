import { motion, useTransform, useViewportScroll } from 'framer-motion';
import AboutDesign from '../../graphics/AboutDesign';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

function About() {
	const { scrollY } = useViewportScroll();
	const [limit, setLimit] = useState(false);
	const [vheight, setVHeight] = useState(window.innerHeight);
	const x = useTransform(scrollY, [vheight * 0, vheight * 4, vheight * 4.1, vheight * 4.2], [0, 0, 0, 500]);
	const [xVal, setXVal] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setXVal(x.get());
			scrollY.get() >= vheight * 6.5 ? setLimit(true) : setLimit(false);
		});
		window.addEventListener('resize', () => {
			setVHeight(window.innerHeight);
		});
		return () => {
			window.removeEventListener('scroll', () => {
				setXVal(x.get());
				x.get() >= vheight * 6.2 ? setLimit(true) : setLimit(false);
			});
			window.addEventListener('resize', () => {
				setVHeight(window.innerHeight);
			});
		};
	});
	return (
		<div className='about' id='about'>
			<div className='about-scroll'>
				<motion.div
					animate={limit ? { x: '100%' } : { x: 0 }}
					transition={limit ? { duration: 1, type: 'tween' } : { duration: 0.8, type: 'tween' }}
					className='about-scroll-wrapper'>
					<AboutDesign x={xVal} />
					<motion.h1 initial={{ opacity: 0 }} animate={x.get() > 300 ? { opacity: 0 } : { opacity: 1 }}>
						I am passionate of what I do, and I love sharing it with others
					</motion.h1>
				</motion.div>
			</div>
			<motion.div
				initial={{
					opacity: 0,
					borderRight: '0rem groove #88a5a1',
				}}
				whileInView={{ opacity: 1 }}
				transition={{
					opacity: { duration: 1, type: 'tween' },
					borderRight: xVal >= 400 ? { duration: 0.3, type: 'tween' } : { duration: 0.1, type: 'tween' },
				}}
				animate={xVal >= 400 ? { borderRight: '1rem groove #88a5a1' } : { borderRight: '0rem groove #88a5a1' }}
				className='about-content'>
				<motion.div
					initial={{ opacity: 0, x: '-30%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, type: 'tween' }}
					className='about-content-container1'>
					<h1>15+</h1>
					<p>PROGRAMMING</p>
					<p>LANGUAGE</p>
					<p>EXPERIENCE</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: '-30%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, type: 'tween' }}
					className='about-content-container2'>
					<h1>About Me</h1>
					<h2>Nash Uriel A. Tapayan</h2>
					<h3>BS Computer Engineering Student</h3>
					<p>I am a man of passion in his field, and am always looking for new experiences, opportunities to grow, and challenges to overcome.</p>
					<p>
						I love learning new things and sharing my knowledge with other people. My primary passions are mentoring others, writing code, and taking
						photographs.
					</p>
				</motion.div>
			</motion.div>
			<Parallax speed={-15} className='about-content2'>
				<div className='about-content2-section'>
					<h1>"I am a flame fueled with passion and ignited by inquisite"</h1>
					<div className='about-content2-section-container'>
						<div className='about-content2-section-container-column'>
							<div className='about-content2-section-container-column-row'>
								<img src='/assets/logo/pshs.png' />
								<div className='about-content2-section-container-column-row-texts'>
									<h1>PSHS-CVisC Graduate</h1>
									<h2>Director's Lister</h2>
								</div>
							</div>
							<div className='about-content2-section-container-column-row'>
								<img src='/assets/logo/codechum.png' />
								<div className='about-content2-section-container-column-row-texts'>
									<h1>CodeChum</h1>
									<h2>Former Dev Intern</h2>
								</div>
							</div>
							<div className='about-content2-section-container-column-row'>
								<img src='/assets/logo/icas.png' />
								<div className='about-content2-section-container-column-row-texts'>
									<h1>ICAS Digital Technologies</h1>
									<h2>Credit Certification</h2>
								</div>
							</div>
						</div>
						<div className='about-content2-section-container-column'>
							<div className='about-content2-section-container-column-row'>
								<img src='/assets/logo/dost.png' />
								<div className='about-content2-section-container-column-row-texts'>
									<h1>DOST SEI Merit Scholar</h1>
									<h2>S.Y. 2019-2023</h2>
								</div>
							</div>
							<div className='about-content2-section-container-column-row'>
								<img src='/assets/logo/cit.png' />
								<div className='about-content2-section-container-column-row-texts'>
									<h1>CIT-U Student</h1>
									<h2>BS Computer Engineering</h2>
								</div>
							</div>
							<div className='about-content2-section-container-column-row'>
								<img src='/assets/logo/gdsc.png' />
								<div className='about-content2-section-container-column-row-texts'>
									<h1>Google Developer's Club</h1>
									<h2>Member 2019-Present</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Parallax>
			<Parallax speed={0} className='about-footer' id='contact'>
				<div className='about-footer-row1'>
					<h1>Contact Me</h1>
					<img
						src='/assets/nut-logo-white.svg'
						onClick={() => {
							document.querySelector('body')?.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
								inline: 'nearest',
							});
						}}></img>
				</div>
				<div className='about-footer-row2'>
					<div className='about-footer-row2-col1'>
						<div className='about-footer-row2-col1-links'>
							<div className='about-footer-row2-col1-links-comp'>
								<img src='/assets/github-white.svg' />
								<a href='https://github.com/taps-nash'>github.com/taps-nash</a>
							</div>
							<div className='about-footer-row2-col1-links-comp'>
								<img src='/assets/linkedin-white.svg' />
								<a href='https://www.linkedin.com/in/nash-tapayan/'>linkedin.com/in/nash-tapayan</a>
							</div>
						</div>
						<div className='about-footer-row2-col1-links'>
							<div className='about-footer-row2-col1-links-comp'>
								<img src='/assets/facebook-white.svg' />
								<a href='https://facebook.com/nashtaps'>facebook.com/nashtaps</a>
							</div>
							<div className='about-footer-row2-col1-links-comp'>
								<img src='/assets/phone.svg' />
								<a>{'(+63)945-3482-208/ (032)488-0949'}</a>
							</div>
						</div>
					</div>
					<div className='about-footer-row2-col2'>
						<div className='about-footer-row2-col2-links'>
							<h1>Check out my portfolio repository here:</h1>
							<div className='about-footer-row2-col2-links-comp'>
								<img src='/assets/git.svg' />
								<a href='https://github.com/taps-nash/taps-portfolio'>taps-nash/taps-portfolio</a>
							</div>
						</div>
						<div className='about-footer-row2-col2-links'>
							<h1>Download my resume here:</h1>
							<div className='about-footer-row2-col2-links-comp'>
								<img src='/assets/file.svg' />
								<a href='https://drive.google.com/drive/folders/1q7oZLiPnrHchPUIkXriUdPWiQ-lfu-nf?usp=sharing'>drive.google.com/resume</a>
							</div>
						</div>
					</div>
				</div>
			</Parallax>
		</div>
	);
}

export default About;
