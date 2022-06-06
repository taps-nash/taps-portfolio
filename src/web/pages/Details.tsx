import React from 'react';
import Navbar2 from '../components/Navbar2';
import data from '../../data/details.json';
import { useLocation, useParams } from 'react-router-dom';

function Details() {
	const { id } = useParams();
	const index = data.findIndex((value) => {
		return value.param === id;
	});
	console.log(id);
	return (
		<div className='details'>
			<div className='details-navbar'>
				<Navbar2 />
			</div>
			<div className='details-body'>
				<div className='details-body-col1'>
					<div className='details-body-col1-header'>
						<img src={data.at(index)?.label} />
					</div>
					<div className='details-body-col1-content'>
						<div className='details-body-col1-content-row1'>
							<h1>Description</h1>
							<p>{data.at(index)?.description}</p>
						</div>
						<div className='details-body-layer1-content-row2'>
							<h1>Challenges</h1>
							<p>{data.at(index)?.challenges}</p>
						</div>
						<div className='details-body-layer1-content-row3'>
							<h1>Solution</h1>
							<p>{data.at(index)?.solutions}</p>
						</div>
						<div className='details-body-layer1-content-row4'>
							<h1>Role</h1>
							<p>{data.at(index)?.role}</p>
						</div>
						<div className='details-body-layer1-content-row5'>
							<h1>Learnings</h1>
							<p>{data.at(index)?.skills}</p>
						</div>
					</div>
				</div>
				<div className='details-body-col2'></div>
			</div>
			<div className='details-carousel'></div>
			<div className='details-footer'></div>
		</div>
	);
}

export default Details;
