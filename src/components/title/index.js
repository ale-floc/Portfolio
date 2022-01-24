import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import './styles.scss';

const Title = ({ title }) => {
	const { ref, inView } = useInView({
		threshold: 1,
		rootMargin: '-150px 0px',
		triggerOnce: true
	});

	return (
		<div ref={ref} className={classNames('observer', { ['title-fade']: inView })}>
			{inView ? <h2 className="title">{title}</h2> : <h2 className="title_hidden"></h2>}
		</div>
	)
}

export default Title;