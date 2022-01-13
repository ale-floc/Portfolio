import React from 'react';
import { animateScroll } from 'react-scroll';
import { UpOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => (
	<footer>
		<div className="scroll-top" onClick={() => animateScroll.scrollToTop()}>
			<UpOutlined />
		</div>
		<div className="wrapper-footer">
			<div className="icon-footer">
				<a href="https://www.linkedin.com/in/arnaud-le-floch-6849a3a7/" rel="noopener noreferrer" target="_blank">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="https://github.com/ale-floc" rel="noopener noreferrer" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="mailto:a.lefloch2491@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			<div className="copyright">
				ARNAUD LE FLOCH © 2021
      		</div>
		</div>
	</footer>
);

export default Footer;