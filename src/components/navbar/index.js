import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { MenuOutlined } from '@ant-design/icons';
import translation from '../../assets/lang.json';
import englishFlag from '../../assets/img/english.svg';
import frenchFlag from '../../assets/img/french.svg';
import NavButton from './navButton';
import './styles.scss';

const Navbar = ({ language, setLanguage }) => {
	const [scroll, setScroll] = useState(0);
	const [isActive, setActive] = useState(false);
	const changeLanguage = () => language === 'en' ? setLanguage('fr') : setLanguage('en');
	const changeFlag = () => language === 'en' ? englishFlag : frenchFlag;

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', () => setActive(false));
	}, []);

	return (
		<nav className={classNames({ navBackground: scroll > 200 })}>
			<img className='flag' src={changeFlag()} onClick={changeLanguage} />
			<MenuOutlined className={classNames('menuResponsive', { toggleMenu: isActive })} onClick={() => setActive(!isActive)} />
			<ul className={classNames({ toggleMenu: isActive })}>
				<NavButton text={translation[language].home} to="home" scroll={scroll <= 600} setActive={setActive} />
				<NavButton text={translation[language].about} to="about" scroll={scroll <= 1300 && scroll > 600} setActive={setActive} />
				<NavButton text={translation[language].skills} to="skills" scroll={scroll <= 2400 && scroll > 1300} setActive={setActive} />
				<NavButton text={translation[language].experience} to="experiences" scroll={scroll <= 3300 && scroll > 2400} setActive={setActive} />
			</ul>
		</nav>
	)
};

export default Navbar;