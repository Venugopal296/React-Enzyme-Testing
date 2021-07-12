import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../Utils';
import ListItem from '.';

describe('ListItem Component', () => {
	describe('Checking Props', () => {
		it('Should NOT throw warning', () => {
			const expectedProps = {
				title: 'Title 1',
				desc: 'Description',
			};

			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});

	describe('Component Render', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				title: 'Title 1',
				desc: 'Description',
			};

			wrapper = shallow(<ListItem {...props} />);
		});
		it('Should render without error', () => {
			const listItem = findByTestAttr(wrapper, 'listItemComponent');
			expect(listItem.length).toBe(1);
		});

		it('Should render title', () => {
			const listItem = findByTestAttr(wrapper, 'componentTitle');
			expect(listItem.length).toBe(1);
		});

		it('Should render desc', () => {
			const listItem = findByTestAttr(wrapper, 'componentDesc');
			expect(listItem.length).toBe(1);
		});
	});

	describe('Component NOT Render', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				desc: 'Description',
			};

			wrapper = shallow(<ListItem {...props} />);
		});
		it('Component is not rendered', () => {
			const listItem = findByTestAttr(wrapper, 'listItemComponent');
			expect(listItem.length).toBe(0);
		});
	});
});
