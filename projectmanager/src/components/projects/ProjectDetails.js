import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ProjectDetails = props => {
	const { id } = props.match.params;

	const { getProjectById, project, BASE_URL, setState } = props;

	useEffect(
		() => {
			const url = `${BASE_URL}/projects/${id}`;
			getProjectById({ url, setState });
		},
		[BASE_URL, getProjectById, id, setState]
	);

	console.log(project);

	return (
		<React.Fragment>
			<StyledHeader>
				<Container>
					<h1>Welcome to project manager app</h1>
				</Container>
			</StyledHeader>

			<main>
				<Container>
					<Content>
						<h2>Project Details</h2>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<h2>Actions</h2>
						<ul>
							<li>List here</li>
						</ul>
					</Content>
				</Container>
			</main>
		</React.Fragment>
	);
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

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding-top: 100px;
`;
