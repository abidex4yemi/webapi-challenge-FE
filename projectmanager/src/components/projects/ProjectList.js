import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

export const ProjectList = props => {
	const { projects } = props;

	return (
		<section>
			{projects.map(project => {
				return <Project key={project.id} {...project} />;
			})}
		</section>
	);
};

ProjectList.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		})
	)
};
