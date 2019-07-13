import React from 'react';
import PropTypes from 'prop-types';
import { ProjectList } from './ProjectList';

export const Projects = props => {
	const { projects, fetching } = props;

	return (
		<React.Fragment>
			<header>
				<div>
					<h1>Welcome to project manager app</h1>
				</div>
			</header>

			<main>
				<div>
					{fetching && <div>Loading...</div>}
					{projects.length > 0 ? <ProjectList projects={projects} /> : <div>No project </div>}
				</div>
			</main>
		</React.Fragment>
	);
};

Projects.propTypes = {
	projects: PropTypes.array.isRequired,
	fetching: PropTypes.bool.isRequired
};
