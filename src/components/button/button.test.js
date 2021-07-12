import React from 'react';
import { findByTestAttr, checkProps } from '../../../Utils';
import SharedButton from '.';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {
	describe('Checking Props', () => {
		it('Should NOT throw warning', () => {
			const expectedProps = {
				buttonText: 'Example text',
				emitEvent: () => {},
			};

			const propsError = checkProps(SharedButton, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});

	describe('Renders', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				buttonText: 'Example text',
				emitEvent: () => {},
			};

			wrapper = shallow(<SharedButton {...props} />);
		});

		it('Should render button component', () => {
			const button = findByTestAttr(wrapper, 'buttonComponent');
			expect(button.length).toBe(1);
		});
	});
});
