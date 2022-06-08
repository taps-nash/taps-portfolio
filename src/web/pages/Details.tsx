import React from 'react';
import Navbar2 from '../components/Navbar2';
import data from '../../data/details.json';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function Details() {
	const { id } = useParams();
	const index = data.findIndex((value) => {
		return value.param === id;
	});
	console.log(id);
	return (
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
					<div className='details-body-details-col1'>
						<div className='details-body-details-col1-content'>
							<div className='details-body-details-col1-content-row'>
								<h1>Description</h1>
								<p>{data.at(index)?.description}</p>
							</div>
							<div className='details-body-details-col1-content-row'>
								<h1>Challenges</h1>
								<p>{data.at(index)?.challenges}</p>
							</div>
							<div className='details-body-details-col1-content-row'>
								<h1>Solution</h1>
								<p>{data.at(index)?.solutions}</p>
							</div>
							<div className='details-body-details-col1-content-row'>
								<h1>Role</h1>
								<p>{data.at(index)?.role}</p>
							</div>
							<div className='details-body-details-col1-content-row'>
								<h1>Learnings</h1>
								<p>{data.at(index)?.skills}</p>
							</div>
						</div>
					</div>
					<div className='details-body-details-col2'>
						<img src={data.at(index)?.background} />
					</div>
				</div>
			</motion.div>
			<div className='details-carousel'></div>
			<div className='details-footer'></div>
		</div>
	);
}

export default Details;
