import React from 'react';
import PropTypes from 'prop-types';

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
