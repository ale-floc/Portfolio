import React, { useContext } from 'react';
import Title from '../title';
import translation from '../../assets/lang.json';
import avatar from '../../assets/img/arnaud.png';
import { LanguageContext } from '../app';
import './styles.scss';

const About = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div id="about" className="container">
			<Title title={translation[language].about} />
			<div className="wrapper">
				<img src={avatar} />
				<div className="paragraphly">
					{translation[language].aboutText.map(text => (
						<h3 key={text}>{text}</h3>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;