import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ActionList } from '../Actions';

export const ProjectDetails = props => {
	const { id } = props.match.params;

	const { getProjectById, project, BASE_URL, setState } = props;

	const render = () => {
		if (Object.keys(project).length === 0) {
			return <div>Loading...</div>;
		} else if (project.actions.length === 0) {
			return <div>No action </div>;
		}

		return (
			<div>
				<p>
					<span>Name:</span> {project.name}
				</p>
				<p>
					<span>Description:</span> {project.description}
				</p>
				<h3>Actions</h3>
				<ActionList actions={project.actions} />
			</div>
		);
	};

	useEffect(
		() => {
			const url = `${BASE_URL}/projects/${id}`;
			getProjectById({ url, setState });
		},
		[BASE_URL, getProjectById, id, setState]
	);

	return (
		<React.Fragment>
			<StyledHeader>
				<Container>
					<StyledBackButton to="/">Back</StyledBackButton>
					<h1>Project Details</h1>
				</Container>
			</StyledHeader>

			<main>
				<Container>
					<Content>
						<h2>Project Details</h2>

						{render()}
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

	div {
		display: flex;
		justify-content: space-between;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		text-align: center;
		margin-bottom: 10px;
	}

	h2 {
		margin: 50px 0;
	}

	p {
		margin-bottom: 10px;
	}

	span {
		font-weight: bold;
	}
`;

const StyledBackButton = styled(Link)`
	display: inline-block;
	font-size: 18px;
	text-decoration: none;
	width: 120px;
	height: 40px;
	line-height: 40px;
	border: 0;
	background: #fff;
	color: #79589f;
	border-radius: 5px;
	cursor: pointer;
	outline: 0;
	transition: 0.2s;

	&:hover {
		background: #5f467e;
		color: #fff;
	}
`;
