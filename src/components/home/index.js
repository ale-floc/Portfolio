import React, { useContext } from 'react';
import { Link, animateScroll } from 'react-scroll';
import { DownOutlined } from '@ant-design/icons';
import translation from '../../assets/lang.json';
import { LanguageContext } from '../app';
import Earth from '../earth';
import './styles.scss';

const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="home" className="container">
      <div className="banner">
        <h1>{translation[language].banner}</h1>
        <h3>{translation[language].description}</h3>
      </div>
      <a href="https://drive.google.com/file/d/1kxHVv8Ha2itdCxSksbveURUFErHr_XLn/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <input type="button" value={translation[language].resume} />
      </a>
      <Earth />
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} >
        <div className="scroll-down" onClick={() => animateScroll.scrollToTop()}>
          <DownOutlined />
        </div>
      </Link>
    </div>
  );
};

export default Home;