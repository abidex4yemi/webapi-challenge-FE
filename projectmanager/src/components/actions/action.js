import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Action = props => {
	const { notes, description } = props;

	return (
		<StyledAction>
			<p>{description}</p>
			<p>{notes}</p>
		</StyledAction>
	);
};

Action.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

const StyledAction = styled.li``;
