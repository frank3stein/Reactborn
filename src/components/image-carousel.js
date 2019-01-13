import React from 'react';
import Img from 'gatsby-image';

class ImageCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImageIndex: 0,
			lastIndex: this.props.images.edges.length - 1
		};
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	nextSlide() {
		const lastIndex = this.state.lastIndex; //TODO: receive it from array length
		const { currentImageIndex } = this.state;
		const index = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	previousSlide() {
		const lastIndex = this.state.lastIndex; // TODO receive it from array length of props
		const { currentImageIndex } = this.state;
		const index = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});
	}

	render() {
		console.log(this.props.images.edges, this.state.currentImageIndex);
		return (
			<div
				style={{
					position: 'relative'
				}}
			>
				<Img fluid={this.props.images.edges[this.state.currentImageIndex].node.childImageSharp.fluid} />
				<LeftArrow handleClick={this.previousSlide} glyph="&#9664;" />
				<RightArrow handleClick={this.nextSlide} glyph="&#9654;" />
			</div>
		);
	}
}

const LeftArrow = ({ handleClick, glyph }) => (
	<div
		style={{
			color: '#14B6D4',
			cursor: 'pointer',
			fontSize: '2rem',
			position: 'absolute',
			top: '50%',
			left: '1rem',
			minHeight: '40px'
		}}
		onClick={handleClick}
	>
		{glyph}
	</div>
);

const RightArrow = ({ handleClick, glyph }) => (
	<div
		style={{
			color: '#14B6D4',
			cursor: 'pointer',
			fontSize: '2rem',
			position: 'absolute',
			top: '50%',
			right: '1rem',
			minHeight: '40px'
		}}
		onClick={handleClick}
	>
		{glyph}
	</div>
);

export default ImageCarousel;
