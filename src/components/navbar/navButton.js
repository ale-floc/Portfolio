import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

const NavButton = ({ text, to, scroll, setActive }) => (
    <Link activeClass="active" to={to} spy={true} smooth={true} duration={800} onClick={() => setActive(false)}>
        <li className={classNames({ ['nav-active']: scroll })}>
            {text}
        </li>
    </Link>
);

export default NavButton;