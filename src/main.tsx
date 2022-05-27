import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import Switch from './router/Switch';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ParallaxProvider>
			<Switch />
		</ParallaxProvider>
	</React.StrictMode>
);
