import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollTop from '../functions/scrollTop';
import Home from '../web/Home';
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
				</Routes>
			</ScrollTop>
		</BrowserRouter>
	);
}

export default Switch;
