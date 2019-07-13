import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../~reuseables';

export const Project = props => {
	const { id, name, description } = props;

	return (
		<div>
			<Link to={`/projects/${id}`}>
				<h3>Name: {name}</h3>
				<p>Description: {description}</p>
			</Link>

			<div>
				<Button>Delete</Button>
				<Button>Update</Button>
			</div>
		</div>
	);
};

Project.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
