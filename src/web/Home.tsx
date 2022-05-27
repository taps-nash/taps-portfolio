import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import DynamicBg from './components/DynamicBg';

function Home() {
	return (
		<div className='home'>
			<DynamicBg />
			<motion.div></motion.div>
			<motion.div></motion.div>
		</div>
	);
}

export default Home;
