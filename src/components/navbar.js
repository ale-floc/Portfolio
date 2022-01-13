import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import translation from '../assets/lang.json';
import englishFlag from '../assets/img/english.svg';
import frenchFlag from '../assets/img/french.svg';
import japanFlag from '../assets/img/japan.svg';

const Navbar = ({ language, setLanguage, scroll }) => {
    const getFlag = () => {
        switch (language) {
            case 'fr':
                return frenchFlag;
            case 'ja':
                return japanFlag;
            default:
                return englishFlag;
        }
    };
    const changeLanguage = () => {
        if (language === 'en')
            setLanguage('fr');
        else if (language === 'fr')
            setLanguage('en'); // Japan is in progress for now.
        else if (language === 'ja')
            setLanguage('en');
    };

    return (
        <nav className={classNames({ navBackground: scroll > 200 })}>
            <img className='flag' src={getFlag()} onClick={changeLanguage} />
            <ul>
                <li className={classNames({ ['nav-active']: scroll <= 600 })}><Link activeClass="active" to="home" spy={true} smooth={true} duration={1000} >{translation[language].home}</Link></li>
                <li className={classNames({ ['nav-active']: scroll <= 1500 && scroll > 600 })}><Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} >{translation[language].about}</Link></li>
                <li className={classNames({ ['nav-active']: scroll <= 2400 && scroll > 1500 })}><Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} >{translation[language].skills}</Link></li>
                <li className={classNames({ ['nav-active']: scroll <= 3300 && scroll > 2400 })}><Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000} >{translation[language].experience}</Link></li>
                {/* <li className={classNames({ ['nav-active']: scroll <= 4800 && scroll > 3300 })}><Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000} >{translation[language].contact}</Link></li> */}
            </ul>
        </nav>
    )
};

export default Navbar;