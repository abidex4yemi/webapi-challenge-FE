import axios from 'axios';

export const getProjectById = ({ url, setState }) => {
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
				project: res.data.body
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
