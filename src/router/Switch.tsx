import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ScrollTop from '../functions/scrollTop';
import Home from '../web/Home';

function Switch() {
	const [screenRatio, setScreenRatio] = useState(0);

	const handleResize = () => {
		setScreenRatio(window.innerHeight / window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<BrowserRouter>
			<ScrollTop>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</ScrollTop>
		</BrowserRouter>
	);
}

export default Switch;
