import React from 'react';
import { Link } from 'gatsby';
// import { DormImages } from '../components/image-carousel';

import Layout from '../components/layout';

const SecondPage = () => (
	<Layout>
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		{/* <DormImages /> */}
		<Link to="/">Go back to the homepage</Link>
	</Layout>
);

export default SecondPage;
