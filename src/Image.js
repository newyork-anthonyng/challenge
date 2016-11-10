import React, { PropTypes} from 'react';

const Image = ({ src }) => {
	return (
		<div className="image">
			<img src={src} />
		</div>
	);
};

Image.PropTypes = {
	src: PropTypes.string.isRequired
};

export default Image;
