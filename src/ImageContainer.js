import React, { PropTypes } from 'react';
import Image from './Image';

const ImageContainer = ({ images }) => {
	return (
		<div className="imageContainer">
			<ul>
				{images.map((image) => {
					return (
						<li key={image}>
							<Image src={image} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

ImageContainer.propTypes = {
	images: PropTypes.array.isRequired,
};

export default ImageContainer;
