import { motion } from 'framer-motion';

function DynamicBg() {
	const svgVariants = {
		hidden: {
			scale: 0,
			opacity: 0.5,
		},
		visible: {
			scale: 2,
			opacity: 1,
			transition: { duration: 0.8, type: 'spring' },
		},
	};

	return (
		<>
			<div className='background'>
				<div className='background-layer0'>
					<motion.svg
						width='153'
						height='88'
						viewBox='0 0 153 88'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						variants={svgVariants}
						initial='hidden'
						animate='visible'>
						<g clip-path='url(#clip0_72_8)'>
							<path
								d='M0.25 88V26.5H1.25L17.875 53.25V88H0.25ZM0.25 12V0.5H14.625L60 71H66L63 88H55.875H47.5L0.25 12ZM38.25 25.75V0.5H55.875V52.5H54.875L38.25 25.75Z'
								fill='#18273A'
							/>
							<path
								d='M72.5 88.125H66.75L69.75 71H71.25C72.75 71 75.5833 69.6667 77.25 68.25C78.6667 66.9167 79.4167 65.2917 79.5 63.375V4.5L97 22V63.375C97 72.7917 92.8333 79.8333 84.5 84.5C80.3333 86.9167 76.3333 88.125 72.5 88.125Z'
								fill='#18273A'
							/>
							<path
								d='M80 1H152.812V18.25H134.562V88.5H116.938V18.25H98L80 1Z'
								fill='#18273A'
							/>
						</g>
						<defs>
							<clipPath id='clip0_72_8'>
								<rect width='153' height='88' fill='white' />
							</clipPath>
						</defs>
					</motion.svg>
				</div>
				<motion.div
					initial={{ top: '-100%' }}
					animate={{ top: '-2%' }}
					transition={{ delay: 0.6, duration: 1.5, type: 'tweet' }}
					className='background-layer1 img-parallax'
					data-value='-1'></motion.div>
				<motion.div
					initial={{ bottom: '-50%', left: '-50%' }}
					animate={{ bottom: '-2%', left: '-2%' }}
					transition={{ delay: 0.6, duration: 1, type: 'tweet' }}
					className='background-layer2 img-parallax'
					data-value='1'></motion.div>
				<motion.div
					initial={{ right: '-100%' }}
					animate={{ right: '-2%' }}
					transition={{ delay: 0.6, duration: 1, type: 'tweet' }}
					className='background-layer3 img-parallax'
					data-value='2'></motion.div>
				<div className='background-layer4 img-parallax' data-value='-2'>
					<motion.div
						initial={{ y: '100%' }}
						animate={{ y: '2%' }}
						transition={{
							delay: 1.4,
							duration: 1.5,
							type: 'spring',
						}}
						className='background-layer4-image'>
						<img src='/src/assets/soloPic.png' />
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default DynamicBg;
