import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Action } from './Action';

export const ActionList = props => {
	const { actions } = props;

	return (
		<StyledAction>
			{actions.map(action => {
				return <Action key={action.id} {...action} />;
			})}
		</StyledAction>
	);
};

ActionList.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			notes: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		})
	)
};

const StyledAction = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-content: center;
	width: 100%;
`;
