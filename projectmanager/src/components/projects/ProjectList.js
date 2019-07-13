import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Project } from './Project';

export const ProjectList = props => {
	const { projects } = props;

	return (
		<StyledProjectList>
			{projects.map(project => {
				return <Project key={project.id} {...project} />;
			})}
		</StyledProjectList>
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

const StyledProjectList = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-content: center;
	width: 100%;
`;
