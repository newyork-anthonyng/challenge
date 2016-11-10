import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	it('should render an input field and button', () => {
		const wrapper = shallow(
			<SearchBar onClick={() => {}} />
		);

		expect(wrapper.find('input').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should run callback when button is clicked', () => {
		let cbInvoked = false;
		const cb = (text) => cbInvoked = text;
		const wrapper = shallow(
			<SearchBar onClick={cb} />
		);

		const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'dogs' } });

		const button = wrapper.find('button');
		button.simulate('click');

		expect(cbInvoked).toEqual('dogs');
	});

	it('should run callback when enter key is pressed', () => {
		let cbInvoked = false;
		const cb = (text) => cbInvoked = text;
		const wrapper = shallow(
			<SearchBar onClick={cb} />
		);

		const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'dogs' } });

		input.simulate('keyPress', { key: 'Enter' });

		expect(cbInvoked).toEqual('dogs');
	});
});
