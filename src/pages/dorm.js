import React from 'react';
// import { Link } from 'gatsby';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import ImageCarousel from '../components/image-carousel';

import Layout from '../components/layout';

const DormImages = (props) => {
	const Images = {
		dormImages: props.data.dormImages,
		gardenImages: props.data.gardenImages,
		kingImages: props.data.kingImages,
		queenImages: props.data.queenImages,
		sharedImages: props.data.sharedImages,
		patioImages: props.data.patioImages
	};
	return (
		<Layout>
			<p>Dorm Images</p>
			<ImageCarousel images={Images.dormImages} />
			{/* <p>Dorm Images</p>
			{props.data.dormImages.edges.map((image) => {
				// console.log(images);
				return <Img className="dorm" fluid={image.node.childImageSharp.fluid} />;
			})} */}
			{/* <p>King Images</p>
			{props.data.kingImages.edges.map((image) => {
				return <Img className="king" fluid={image.node.childImageSharp.fluid} />;
			})} */}
			<p>King Images</p>
			<ImageCarousel images={Images.kingImages} />
		</Layout>
	);
};

export default DormImages;

export const dormQuery = graphql`
	query {
		dormImages: allFile(filter: { name: { regex: "/dorm[0-9]{2}/" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		}
		gardenImages: allFile(filter: { name: { regex: "/garden[0-9]{2}/" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		kingImages: allFile(filter: { name: { regex: "/king[0-9]{2}/" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		queenImages: allFile(filter: { name: { regex: "/queen[0-9]{2}/" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		sharedImages: allFile(filter: { name: { regex: "/shared[0-9]{2}/" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		patioImages: allFile(filter: { name: { regex: "/patio[0-9]{2}/" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
