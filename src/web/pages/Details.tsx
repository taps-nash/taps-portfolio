import React from 'react';
import Navbar2 from '../components/Navbar2';
import { useLocation } from 'react-router-dom';

function Details() {
	const location = useLocation();
	console.log(location.pathname.includes('projects'));
	return (
		<div className='details'>
			<div className='details-navbar'>
				<Navbar2 />
			</div>
			<div className='details-body'>
				<div className='details-body-col1'></div>
				<div className='details-body-col2'></div>
			</div>
			<div className='details-carousel'></div>
			<div className='details-footer'></div>
		</div>
	);
}

export default Details;
