import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../~reuseables';

export const Project = props => {
	const { id, name, description } = props;

	return (
		<StyledProject>
			<Link to={`/projects/${id}`}>
				<h3>Name: {name}</h3>
				<p>Description: {description}</p>
			</Link>

			<StyledButtonContainer>
				<Button>Delete</Button>
				<Button>Update</Button>
			</StyledButtonContainer>
		</StyledProject>
	);
};

Project.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

const StyledProject = styled.div`
	background: #f4f4f4;
	padding: 20px;
	height: 200px;
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	border-radius: 5px;

	a {
		text-decoration: none;
		color: #5f467e;

		&:hover {
			color: purple;
		}
	}

	h3,
	p {
		margin-bottom: 16px;
	}
`;

const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
