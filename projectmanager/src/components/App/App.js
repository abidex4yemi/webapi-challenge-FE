import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getProjects, getProjectById } from '../../helpers';
import { Projects, ProjectDetails } from '../Projects';

const BASE_URL = `https://web-api-sprint-1.herokuapp.com/api/v1`;

const initialState = {
	projects: [],
	project: {},
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
			<Route
				exact
				path="/projects/:id"
				render={props => (
					<ProjectDetails
						{...props}
						getProjectById={getProjectById}
						BASE_URL={BASE_URL}
						{...state}
						setState={setState}
					/>
				)}
			/>
		</div>
	);
};
