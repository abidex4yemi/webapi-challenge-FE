import React from 'react';
import PropTypes from 'prop-types';
import { ProjectList } from './ProjectList';

export const Projects = props => {
	const { projects } = props;

	return (
		<React.Fragment>
			<header>
				<div>
					<h1>Welcome to project manager app</h1>
				</div>
			</header>

			<main>
				<div>
					<ProjectList projects={projects} />
				</div>
			</main>
		</React.Fragment>
	);
};

Projects.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
