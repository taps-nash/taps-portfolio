import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = (props: any) => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/') {
			setTimeout(() => {
				const div = document.querySelector('#locator');
				div?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest',
				});
			}, 0);
		} else if (location.pathname === '/about') {
			setTimeout(() => {
				const div = document.querySelector('#about');
				div?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest',
				});
			}, 100);
		} else if (location.pathname === '/access') {
			setTimeout(() => {
				const div = document.querySelector('#access');
				div?.scrollIntoView({});
			}, 0);
		} else {
			setTimeout(() => {
				const div = document.querySelector('body');
				div?.scrollIntoView({
					block: 'start',
					inline: 'nearest',
				});
			}, 0);
		}
	}, [location]);
	return <>{props.children}</>;
};

export default ScrollTop;
