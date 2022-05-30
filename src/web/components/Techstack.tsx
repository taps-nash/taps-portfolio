import { useEffect, useState } from 'react';
import data from '../../data/techstack.json';

function Techstack() {
	return (
		<div className='techstack'>
			<div className='techstack-main'>
				<div className='techstack-main-header'>
					<h1>MY MASTERED TECH STACK</h1>
				</div>
				<div className='techstack-main-row'>
					{data.slice(0, 7).map((value) => (
						<div className='techstack-main-row-tech' key={value.id}>
							<img src={value.icon} />
							<h1>{value.name}</h1>
						</div>
					))}
				</div>
			</div>
			<div className='techstack-other'>
				<div className='techstack-other-header'>
					<h1>OTHER TECH STACK</h1>
				</div>
				<div className='techstack-other-content'>
					{data.slice(7, 17).map((value) => (
						<div className='techstack-other-content-tech' key={value.id}>
							<img src={value.icon} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Techstack;
