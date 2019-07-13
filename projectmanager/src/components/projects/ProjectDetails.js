import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ProjectDetails = props => {
	return (
		<React.Fragment>
			<StyledHeader>
				<Container>
					<h1>Welcome to project manager app</h1>
				</Container>
			</StyledHeader>

			<main>
				<Container>
					<Content>Details</Content>
				</Container>
			</main>
		</React.Fragment>
	);
};

// ProjectDetails.propTypes = {
// 	projects: PropTypes.array.isRequired,
// 	fetching: PropTypes.bool.isRequired
// };

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
	justify-content: center;
	align-content: center;
	padding-top: 100px;
`;
