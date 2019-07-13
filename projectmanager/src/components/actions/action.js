import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Action = props => {
	const { notes, description } = props;

	return (
		<StyledAction>
			<p>
				<span>Description:</span> {description}
			</p>
			<p>
				<span>Notes:</span> {notes}
			</p>
		</StyledAction>
	);
};

Action.propTypes = {
	id: PropTypes.number.isRequired,
	notes: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

const StyledAction = styled.li``;
