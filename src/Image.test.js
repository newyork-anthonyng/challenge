import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image', () => {
	it('should render an img', () => {
		const wrapper = shallow(
			<Image src="abc" />
		);

		expect(wrapper.find('img').length).toEqual(1);
		expect(wrapper.find('img').prop('src')).toEqual('abc');
	});
});
