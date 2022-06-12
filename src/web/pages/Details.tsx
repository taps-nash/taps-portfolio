import React, { useEffect, useRef, useState } from 'react';
import Navbar2 from '../components/Navbar2';
import data from '../../data/details.json';
import { useParams } from 'react-router-dom';
import { motion, useElementScroll } from 'framer-motion';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import Modal from '../components/Modal';
import { debounce } from 'lodash';

function Details() {
	const { id } = useParams();
	const [showNext, setShowNext] = useState(true);
	const [showPrev, setShowPrev] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [imagePreview, setImagePreview] = useState(0);

	const ref: any = useRef();
	const { scrollX } = useElementScroll(ref);

	const handleScroll = debounce(() => {
		setShowNext(
			scrollX.get() <
				document.getElementById('gallery')?.scrollWidth! -
					document.getElementById('gallery')?.clientWidth!
		);
		setShowPrev(scrollX.get() > 0);
	}, 100);

	useEffect(() => {
		document
			.getElementById('gallery')
			?.addEventListener('scroll', handleScroll);
		return () =>
			document
				.getElementById('gallery')
				?.addEventListener('scroll', handleScroll);
	});

	const scrollGallery = (movement: string) => {
		console.log(scrollX.get());
		handleScroll;
		if (movement === 'forward')
			document.getElementById('gallery')?.scrollTo(scrollX.get() + 345, 0);
		else if (movement === 'backward')
			document.getElementById('gallery')?.scrollTo(scrollX.get() - 345, 0);
	};

	const handlePreview = (image: number) => {
		document.querySelector('body')?.style.setProperty('overflow-y', 'hidden');
		setImagePreview(image);
		setShowModal(true);
	};

	const index = data.findIndex((value) => {
		return value.param === id;
	});
	console.log(id);
	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				imagePreview={imagePreview}
				setImagePreview={setImagePreview}
				projects={data.at(index)}
			/>
			<div className='details'>
				<div className='details-navbar'>
					<Navbar2 use={id} />
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
					className='details-body'>
					<div className='details-body-header'>
						<img src={data.at(index)?.label} />
					</div>
					<div className='details-body-details'>
						<div className='details-body-details-desc'>
							<div className='details-body-details-desc-content'>
								<div className='details-body-details-desc-content-row'>
									<h1>Description</h1>
									<p>{data.at(index)?.description}</p>
								</div>
								<div className='details-body-details-desc-content-row'>
									<h1>Challenges</h1>
									<p>{data.at(index)?.challenges}</p>
								</div>
								<div className='details-body-details-desc-content-row'>
									<h1>Solution</h1>
									<p>{data.at(index)?.solutions}</p>
								</div>
								<div className='details-body-details-desc-content-row'>
									<h1>Role</h1>
									<p>{data.at(index)?.role}</p>
								</div>
								<div className='details-body-details-desc-content-row'>
									<h1>Learnings</h1>
									<p>{data.at(index)?.skills}</p>
								</div>
							</div>
						</div>
						<div className='details-body-details-backdrop'>
							<div className='details-body-details-backdrop-image'>
								<img src={data.at(index)?.background} />
							</div>
						</div>
						<motion.div
							initial={{ opacity: 0, y: '10%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className='details-body-details-links'>
							{data.at(index)?.links?.map((links) => {
								return (
									<div className='details-body-details-links-comp'>
										<img src={links.image} />
										<a href={links.link}>{links.name}</a>
									</div>
								);
							})}
						</motion.div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
					className='details-carousel'>
					<motion.div
						animate={showPrev ? { x: 0 } : { x: '-100%' }}
						transition={{ duration: 0.3, type: 'tween' }}
						className='details-carousel-prev'
						onMouseDown={() => scrollGallery('backward')}>
						<MdOutlineNavigateBefore color='white' fontSize='2rem' />
					</motion.div>

					<div ref={ref} className='details-carousel-container' id='gallery'>
						{data.at(index)?.pictures.map((pic) => (
							<motion.div
								initial={{
									background: `linear-gradient(0deg, rgba(50, 50, 50, 0.15),rgba(50, 50, 50, 0.15)),url("${pic}")`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
								whileHover={{
									background: `url("${pic}")`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
								onClick={() => {
									handlePreview(data.at(index)?.pictures.indexOf(pic)!);
								}}
								transition={{ duration: 1, ease: 'easeInOut' }}
								key={data.at(index)?.pictures.indexOf(pic)}
								className='details-carousel-container-image'></motion.div>
						))}
					</div>

					<motion.div
						animate={showNext ? { x: 0 } : { x: '100%' }}
						transition={{ duration: 0.3, type: 'tween' }}
						className='details-carousel-next'
						onMouseDown={() => scrollGallery('forward')}>
						<MdOutlineNavigateNext color='white' fontSize='2rem' />
					</motion.div>
				</motion.div>
				<div className='details-footer'></div>
			</div>
		</>
	);
}

export default Details;
