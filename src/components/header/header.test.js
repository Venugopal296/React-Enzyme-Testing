import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../Utils';
import Header from './index';

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe('Header component', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('should render without error', () => {
		const wrapper = findByTestAttr(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	});

	it('should contain one logo', () => {
		const logo = findByTestAttr(component, 'logoIMG');
		expect(logo.length).toBe(1);
	});
});
