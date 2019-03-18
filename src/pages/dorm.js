import React, { useState } from 'react';
// import { Link } from 'gatsby';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import ImageCarousel from '../components/image-carousel';

import Layout from '../components/layout';

const DormImages = (props) => {
	const [ room, setRoom ] = useState(props.data.dormImages);
	// before hooks state for images for multiple image carousel
	// const Images = {
	// 	dormImages: props.data.dormImages,
	// 	gardenImages: props.data.gardenImages,
	// 	kingImages: props.data.kingImages,
	// 	queenImages: props.data.queenImages,
	// 	sharedImages: props.data.sharedImages,
	// 	patioImages: props.data.patioImages
	// };
	const whichRoom = (event) => {
		switch (event.target.innerText) {
			case 'Dorm':
				console.log(event.target.innerText, room);
				setRoom(props.data.dormImages);
				break;
			case 'King':
				setRoom(props.data.kingImages);
				console.log(event.target.innerText);
				break;
			case 'Garden':
				setRoom(props.data.gardenImages);
				console.log(event.target.innerText);
				break;
			case 'Shared':
				setRoom(props.data.sharedImages);
				console.log(event.target.innerText);
				break;
			case 'Patio':
				setRoom(props.data.patioImages);
				console.log(event.target.innerText);
				break;
			default:
				console.log('Does not work, try again.');
		}
	};
	return (
		<Layout>
			<ul onClick={whichRoom}>
				<li>Dorm</li>
				<li>King</li>
				<li>Garden</li>
				<li>Shared</li>
				<li>Patio</li>
			</ul>
			<p>Room Images</p>
			<ImageCarousel images={room} />
			{/* Several rooms carousel implementation */}
			{/* <p>Dorm Images</p>
			{props.data.dormImages.edges.map((image) => {
				// console.log(images);
				return <Img className="dorm" fluid={image.node.childImageSharp.fluid} />;
			})} */}
			{/* <p>King Images</p>
			{props.data.kingImages.edges.map((image) => {
				return <Img className="king" fluid={image.node.childImageSharp.fluid} />;
			})} */}
			{/* <p>King Images</p>
			<ImageCarousel images={Images.kingImages} />
			<p>Garden Images</p>
			<ImageCarousel images={Images.gardenImages} />
			<p>Shared Space</p>
			<ImageCarousel images={Images.sharedImages} />
			<p>Patio Images</p>
			<ImageCarousel images={Images.patioImages} /> */}
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
