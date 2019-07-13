import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getProjects } from '../../helpers';
import { Projects } from '../Projects';

const BASE_URL = `https://web-api-sprint-1.herokuapp.com/api/v1`;

const initialState = {
	projects: [],
	fetching: false,
	error: {}
};

export const App = () => {
	const [state, setState] = useState(initialState);

	useEffect(() => {
		const url = `${BASE_URL}/projects`;
		getProjects({ url, setState });
	}, []);

	return (
		<div>
			<Route exact path="/" render={props => <Projects {...props} {...state} />} />
		</div>
	);
};
