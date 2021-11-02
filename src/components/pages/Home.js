import React, { Fragment, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => {
	const githubContext = useContext(GithubContext);

	const { getUsers } = githubContext;

	useEffect(() => {
		getUsers();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<Search />
			<Users />
		</Fragment>
	);
};

export default Home;
