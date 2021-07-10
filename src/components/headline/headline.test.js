import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../Utils';
import Headline from './index';

const setUp = (props = {}) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe('Headline Component', () => {
	describe('without props', () => {
		let component;
		beforeEach(() => {
			component = setUp();
		});

		it('should render without error', () => {
			const wrapper = findByTestAttr(component, 'HeadlineComponent');
			expect(wrapper.length).toBe(0);
		});
	});

	describe('with props', () => {
		let component;
		beforeEach(() => {
			component = setUp({ header: 'Test Header', desc: 'Test description' });
		});

		it('should render without error', () => {
			const wrapper = findByTestAttr(component, 'HeadlineComponent');
			expect(wrapper.length).toBe(1);
		});

		it('should render H1', () => {
			const h1 = findByTestAttr(component, 'header');
			expect(h1.length).toBe(1);
		});

		it('should render desc', () => {
			const p = findByTestAttr(component, 'desc');
			expect(p.length).toBe(1);
		});
	});
});
