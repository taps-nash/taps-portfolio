import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = (props: any) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		document.querySelector('.home')?.scrollIntoView();
	}, [location]);
	return <>{props.children}</>;
};

export default ScrollTop;
