import React from 'react';

const SkillsItem = ({ id, src, title }) => (
    <div className="skill-item">
        <img id={id} src={src} />
        <span>{title}</span>
    </div>
);

export default SkillsItem;