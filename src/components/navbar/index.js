import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import translation from '../../assets/lang.json';
import englishFlag from '../../assets/img/english.svg';
import frenchFlag from '../../assets/img/french.svg';
import NavButton from '../navButton';
import './styles.scss';

const Navbar = ({ language, setLanguage }) => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY);
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={classNames({ navBackground: scroll > 200 })}>
			<img className='flag' src={language === 'en' ? englishFlag : frenchFlag} onClick={() => language === 'en' ? setLanguage('fr') : setLanguage('en')} />
			<ul>
				<NavButton text={translation[language].home} to="home" scroll={scroll <= 600} />
				<NavButton text={translation[language].about} to="about" scroll={scroll <= 1500 && scroll > 600} />
				<NavButton text={translation[language].skills} to="skills" scroll={scroll <= 2400 && scroll > 1500} />
				<NavButton text={translation[language].experience} to="experiences" scroll={scroll <= 3300 && scroll > 2400} />
			</ul>
		</nav>
	)
};

export default Navbar;