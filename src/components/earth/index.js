import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import earth from '../../assets/img/earth.svg';
import './styles.scss';

const Earth = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY);
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		scroll < 450 && (
			<div className="container-earth" style={{ transform: `translateY(calc(100px + ${scroll * 2}px))` }}>
				<ReactSVG className="earth" src={earth} />
			</div>
		)
	);
};

export default Earth;