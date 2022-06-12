import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import { useParams } from 'react-router-dom';

function Modal({
	showModal,
	setShowModal,
	imagePreview,
	setImagePreview,
	projects,
}: any) {
	const { id }: any = useParams();
	const [direction, setDirection] = useState(false);

	const handleNavigation = (direction: boolean) => {
		setDirection(direction);
		setImagePreview(
			direction
				? imagePreview === projects.pictures.length! - 1
					? 0
					: imagePreview + 1
				: imagePreview === 0
				? projects.pictures.length! - 1
				: imagePreview - 1
		);
	};
	return (
		<motion.div
			initial={{ opacity: 0, display: 'none' }}
			animate={
				showModal
					? { opacity: 1, display: 'flex' }
					: { opacity: 0, display: 'none' }
			}
			transition={
				showModal
					? { duration: 0.3, type: 'tween' }
					: {
							opacity: { duration: 0.3, type: 'tween' },
							display: { delay: 0.3 },
					  }
			}
			className='modal'>
			<div
				className='modal-void'
				onClick={() => {
					document
						.querySelector('body')
						?.style.setProperty('overflow-y', 'auto');
					setShowModal(false);
				}}
			/>
			<motion.div
				initial={{
					scale: 1,
					backgroundColor: 'hsl(218, 31%, 75%, 0.3)',
					x: '-100%',
				}}
				whileInView={{ x: 0 }}
				whileHover={{ scale: 0.95, backgroundColor: 'hsl(218, 31%, 75%, 0.4)' }}
				whileTap={{ scale: 0.9, backgroundColor: 'hsl(218, 31%, 75%, 0.5)' }}
				transition={{ duration: 0.3, type: 'tween' }}
				className='modal-prev'
				onMouseDown={() => handleNavigation(false)}>
				<MdOutlineNavigateBefore color='white' fontSize='2rem' />
			</motion.div>
			<div className='modal-preview'>
				<motion.img
					initial={{ opacity: 0, x: direction ? '20%' : '-20%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					src={projects.pictures.at(imagePreview)}
				/>
			</div>

			<motion.div
				initial={{
					scale: 1,
					backgroundColor: 'hsl(218, 31%, 75%, 0.3)',
					x: '100%',
				}}
				whileInView={{ x: 0 }}
				whileHover={{ scale: 0.95, backgroundColor: 'hsl(218, 31%, 75%, 0.4)' }}
				whileTap={{ scale: 0.9, backgroundColor: 'hsl(218, 31%, 75%, 0.5)' }}
				transition={{ duration: 0.3, type: 'tween' }}
				className='modal-next'
				onMouseDown={() => handleNavigation(true)}>
				<MdOutlineNavigateNext color='white' fontSize='2rem' />
			</motion.div>
		</motion.div>
	);
}

export default Modal;
