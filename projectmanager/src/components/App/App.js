import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
		getProjects(url);
	}, []);

	const getProjects = url => {
		axios
			.get(url)
			.then(res => {
				setState(prevState => ({
					...prevState,
					projects: res.data.body
				}));
			})
			.catch(err => {
				setState(prevState => ({
					...prevState,
					error: err
				}));
			});
	};

	return <div>Welcome</div>;
};
