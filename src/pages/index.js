import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
	<Layout>
		<h1>Hi everyone !</h1>
		<p>Welcome to your haven in Bali, to Waterborn Bali.</p>
		<p>Let us catch some big waves.</p>
		<div style={{ maxWidth: '600px', marginBottom: '1.45rem' }}>
			<Image />
		</div>
		<Link to="/page-2/">Go to page 2</Link>

		<Link to="/dorm/">Go to the dorm page</Link>
	</Layout>
);

export default IndexPage;
