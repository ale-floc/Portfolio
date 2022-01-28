import React, { useContext } from 'react';
import translation from '../../assets/lang.json';
import css from '../../assets/img/skills/css.svg';
import javascript from '../../assets/img/skills/javascript.svg';
import html from '../../assets/img/skills/html.svg';
import react from '../../assets/img/skills/react.svg';
import sass from '../../assets/img/skills/sass.svg';
import nodejs from '../../assets/img/skills/nodejs.svg';
import bootstrap from '../../assets/img/skills/bootstrap.svg';
import jquery from '../../assets/img/skills/jquery.svg';
import mongodb from '../../assets/img/skills/mongodb.svg';
import materialui from '../../assets/img/skills/materialui.svg';
import antd from '../../assets/img/skills/antd.svg';
import mysql from '../../assets/img/skills/mysql.svg';
import visualStudioCode from '../../assets/img/skills/visualStudioCode.svg';
import iterm from '../../assets/img/skills/iterm.svg';
import docker from '../../assets/img/skills/docker.svg';
import ansible from '../../assets/img/skills/ansible.svg';
import terraform from '../../assets/img/skills/terraform.svg';
import postman from '../../assets/img/skills/postman.svg';
import git from '../../assets/img/skills/git.svg';
import premierePro from '../../assets/img/skills/premierePro.svg';
import afterEffect from '../../assets/img/skills/afterEffect.svg';
import illustrator from '../../assets/img/skills/illustrator.svg';
import photoshop from '../../assets/img/skills/photoshop.svg';
import webpack from '../../assets/img/skills/webpack.svg';
import ec2 from '../../assets/img/skills/ec2.svg';
import s3 from '../../assets/img/skills/s3.svg';
import jenkins from '../../assets/img/skills/jenkins.png';
import redux from '../../assets/img/skills/redux.svg';
import Title from '../title';
import { LanguageContext } from '../app';
import SkillsItem from './skillsItem';
import './styles.scss';

const Skills = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div id="skills" className="container">
			<Title title={translation[language].skills} />
			<div className="container-skills">
				<div className="wrapper-skills">
					<h2>{translation[language].development}</h2>
					<div>
						<SkillsItem id="html" src={html} title="HTML 5" />
						<SkillsItem id="css" src={css} title="CSS 3" />
						<SkillsItem id="javascript" src={javascript} title="Javascript" />
						<SkillsItem id="jquery" src={jquery} title="Jquery" />
						<SkillsItem id="react" src={react} title="ReactJS" />
						<SkillsItem id="redux" src={redux} title="Redux" />
						<SkillsItem id="nodejs" src={nodejs} title="NodeJS" />
						<SkillsItem id="sass" src={sass} title="Sass" />
						<SkillsItem id="mongodb" src={mongodb} title="MongoDB" />
						<SkillsItem id="mysql" src={mysql} title="MYSQL" />
						<SkillsItem id="bootstrap" src={bootstrap} title="Bootstrap" />
						<SkillsItem id="antd" src={antd} title="Antd" />
						<SkillsItem id="materialui" src={materialui} title="Material-UI" />
						<SkillsItem id="webpack" src={webpack} title="Webpack" />
					</div>
				</div>
				<div className="wrapper-skills">
					<h2>{translation[language].tools}</h2>
					<div>
						<SkillsItem id="visualStudioCode" src={visualStudioCode} title="VSCode" />
						<SkillsItem id="iterm" src={iterm} title="Iterm 2" />
						<SkillsItem id="git" src={git} title="Git" />
						<SkillsItem id="docker" src={docker} title="Docker" />
						<SkillsItem id="ansible" src={ansible} title="Ansible" />
						<SkillsItem id="terraform" src={terraform} title="Terraform" />
						<SkillsItem id="jenkins" src={jenkins} title="Jenkins" />
						<SkillsItem id="postman" src={postman} title="Postman" />
						<SkillsItem id="illustrator" src={illustrator} title="Illustrator" />
						<SkillsItem id="photoshop" src={photoshop} title="Photoshop" />
						<SkillsItem id="afterEffect" src={afterEffect} title="After Effect" />
						<SkillsItem id="premierePro" src={premierePro} title="Premiere Pro" />
						<SkillsItem id="ec2" src={ec2} title="EC2" />
						<SkillsItem id="s3" src={s3} title="S3" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;