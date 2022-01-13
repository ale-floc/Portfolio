import React from 'react';
import translation from '../assets/lang.json';
import avatar from '../assets/img/arnaud.png';

const About = ({ language }) => (
    <div id="about" className="container">
        <h2 className="title" >{translation[language].about}</h2>

        <div className="wrapper">
            <img src={avatar} />
            <div className="paragraphly">
                <h3>{translation[language].aboutText[0]}</h3>
                <h3>{translation[language].aboutText[1]}</h3>
                <h3>{translation[language].aboutText[2]}</h3>
            </div>
        </div>
    </div>
);

export default About;