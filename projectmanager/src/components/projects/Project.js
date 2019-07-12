import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

export const Project = props => {
	const { id, name, description } = props;

	return (
		<div>
			<h3>Name: {name}</h3>
			<p>Description: {description}</p>
		</div>
	);
};

Project.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
