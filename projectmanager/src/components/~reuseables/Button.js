import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = props => {
	const { children, onClick, type } = props;

	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string
};

Button.defaultProps = {
	type: 'text'
};

const StyledButton = styled.button`
	font-size: 16px;
	width: 120px;
	height: 40px;
	border: 0;
	background: #79589f;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
	outline: 0;
	transition: 0.2s;

	&:hover {
		background: #5f467e;
	}
`;
