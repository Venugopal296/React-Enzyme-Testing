import checkPropsTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropsTypes(
		component.propTypes,
		expectedProps,
		'props',
		component.name
	);
	return propsErr;
};
