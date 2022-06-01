import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = (props: any) => {
	const location = useLocation();
	useEffect(() => {
		location.pathname === '/'
			? setTimeout(() => {
					const div = document.querySelector('#locator');
					div?.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
						inline: 'nearest',
					});
			  }, 200)
			: setTimeout(() => {
					const div = document.querySelector('body');
					div?.scrollIntoView({
						block: 'start',
						inline: 'nearest',
					});
			  }, 200);
	}, [location]);
	return <>{props.children}</>;
};

export default ScrollTop;
