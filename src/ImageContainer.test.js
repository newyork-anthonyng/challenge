import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './ImageContainer';

describe('ImageContainer', () => {
	it('should render an Image Component for each image', () => {
		const images = ['a', 'b', 'c'];

		const wrapper = shallow(
			<ImageContainer images={images} />
		);

		expect(wrapper.find('Image').length).toEqual(3);
	});
});
