import axios from 'axios';

export const getProjects = ({ url, setState }) => {
	setState(prevState => ({
		...prevState,
		fetching: true
	}));

	axios
		.get(url)
		.then(res => {
			setState(prevState => ({
				...prevState,
				fetching: false,
				projects: res.data.body
			}));
		})
		.catch(err => {
			setState(prevState => ({
				...prevState,
				fetching: false,
				error: err
			}));
		});
};
