import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollTop from '../functions/scrollTop';
import Home from '../web/Home';
import Details from '../web/pages/Details';
import Designs from './../web/pages/Designs';
import Projects from './../web/pages/Projects';

function Switch() {
	return (
		<BrowserRouter>
			<ScrollTop>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/designs' element={<Designs />} />
					<Route path='/projects/:id' element={<Details />} />
					<Route path='/designs/:id' element={<Details />} />
				</Routes>
			</ScrollTop>
		</BrowserRouter>
	);
}

export default Switch;
