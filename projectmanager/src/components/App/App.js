import React, { useState } from 'react';

const initialState = {
	projects: [],
	fetching: false
};

export const App = () => {
	const [state, setState] = useState(initialState);

	return <div>Welcome</div>;
};
