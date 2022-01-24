import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

const NavButton = ({ text, to, scroll }) => (
    <li className={classNames({ ['nav-active']: scroll })}>
        <Link activeClass="active" to={to} spy={true} smooth={true} duration={800} >
            {text}
        </Link>
    </li>
);

export default NavButton;