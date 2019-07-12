import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { Project } from './Project';

export const ProjectList = props => {
	const { projects } = props;

	return (
		<section>
			{projects.map(project => {
				return <Project key={project.id} project={project} />;
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
