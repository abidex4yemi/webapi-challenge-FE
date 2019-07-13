import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProjectList } from './ProjectList';

export const Projects = props => {
	const { projects, fetching } = props;

	return (
		<React.Fragment>
			<StyledHeader>
				<Container>
					<h1>Welcome to project manager app</h1>
				</Container>
			</StyledHeader>

			<main>
				<Container>
					{fetching && <div>Loading...</div>}
					{projects.length > 0 ? <ProjectList projects={projects} /> : <div>No project </div>}
				</Container>
			</main>
		</React.Fragment>
	);
};

Projects.propTypes = {
	projects: PropTypes.array.isRequired,
	fetching: PropTypes.bool.isRequired
};

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const StyledHeader = styled.header`
	background: #79589f;
	color: #fff;
	text-align: center;
	padding: 1rem;
`;
