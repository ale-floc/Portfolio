import React from 'react';
import './styles.scss';

const Experience = ({ id, img, year, description, reverse }) => (
    <div {...reverse && { id: 'reverse' }} className="experience">
        <div className="company">
            <img id={id} src={img} />
            <h3>{year}</h3>
        </div>
        <div className="paragraphly">
            <h3>{description}</h3>
        </div>
    </div>
);

export default Experience;