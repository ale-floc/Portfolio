import React from 'react';
import classNames from 'classnames';
import translation from '../assets/lang.json';
import earth from '../assets/img/earth.svg';
import { ReactSVG } from 'react-svg'
import { DownOutlined } from '@ant-design/icons';
import { Link, animateScroll } from 'react-scroll';

const Home = ({ language, scroll }) => (
  <div id="home" className="container">
    <div className="banner">
      <h1>{translation[language].banner}</h1>
      <h3>{translation[language].description}</h3>
    </div>
    <a href="https://drive.google.com/file/d/1kxHVv8Ha2itdCxSksbveURUFErHr_XLn/view?usp=sharing" rel="noopener noreferrer" target="_blank">
      <input type="button" value={translation[language].resume} />
    </a>
    <div className={classNames('container-earth', { displayNone: scroll > 450 })} style={{ transform: `translateY(calc(100px + ${scroll * 2}px))` }}>
      <ReactSVG className="earth" src={earth} />
    </div>
    <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} >
      <div className="button-scroll-reponsive" onClick={() => animateScroll.scrollToTop()}>
        <DownOutlined />
      </div>
    </Link>
  </div>
);

export default Home;