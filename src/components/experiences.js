import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import translation from '../assets/lang.json';
import fortyTwoLogo from '../assets/img/42_logo.svg';
import geekzieLogo from '../assets/img/geekzie.svg';
import europAssistanceLogo from '../assets/img/europ-assistance.png';

const Experiences = ({ language }) => (
    <div id="experiences" className="container">
        <h2 className="title" >{translation[language].experience}</h2>
        <div className="wrapper-experiences">

            <div className="experience">
                <div className="company">
                    <img id="fortyTwo" src={fortyTwoLogo} />
                    <h3>2014</h3>
                </div>
                <div className="paragraphly">
                    <h3>{translation[language].company[0]}</h3>
                </div>
            </div>

            <div id="reverse" className="experience">
                <div className="paragraphly">
                    <h3>{translation[language].company[1]}</h3>
                </div>
                <div className="company">
                    <img id="geekzie" src={geekzieLogo} />
                    <h3>2017</h3>
                </div>
            </div>

            <div className="experience">
                <div className="company">
                    <FontAwesomeIcon id="redpelicans" icon={faPaperPlane} />
                    <h3>2018</h3>
                </div>
                <div className="paragraphly">
                    <h3>{translation[language].company[2]}</h3>
                </div>
            </div>

            <div id="reverse" className="experience">
                <div className="paragraphly">
                    <h3>{translation[language].company[3]}</h3>
                </div>
                <div className="company">
                    <img id="europAssistance" src={europAssistanceLogo} />
                    <h3>2018</h3>
                </div>
            </div>
        </div>
    </div >
);

export default Experiences;