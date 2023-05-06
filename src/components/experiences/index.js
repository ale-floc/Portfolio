import React, { useContext } from 'react';
import Experience from '../experience';
import Title from '../title';
import translation from '../../assets/lang.json';
import fortyTwoLogo from '../../assets/img/42_logo.svg';
import geekzieLogo from '../../assets/img/geekzie.svg';
import europAssistanceLogo from '../../assets/img/europ-assistance.png';
import redpelicansLogo from '../../assets/img/redpelicans.png';
import lrdg from '../../assets/img/lrdg.svg';
import { LanguageContext } from '../app';
import './styles.scss';

const Experiences = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div id="experiences" className="container">
			<Title title={translation[language].experience} />
			<div className="wrapper-experiences">
				<Experience id="lrdg" img={lrdg} year="2022" description={translation[language].company[4]} />
				<Experience reverse id="europAssistance" img={europAssistanceLogo} year="2018" description={translation[language].company[3]} />
				<Experience id="redpelicans" img={redpelicansLogo} year="2018" description={translation[language].company[2]} />
				<Experience reverse id="geekzie" img={geekzieLogo} year="2017" description={translation[language].company[1]} />
				<Experience id="fortyTwo" img={fortyTwoLogo} year="2014" description={translation[language].company[0]} />
			</div>
		</div >
	);
};

export default Experiences;