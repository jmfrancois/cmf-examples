import React from 'react';
import { cmfConnect } from '@talend/react-cmf';
import { Inject } from '@talend/react-components';
import PropTypes from 'prop-types';

function App({ getComponent, components, ...props }) {
	/**
	 * Instanciate all global components here
	 * Ex : we register @talend/react-components <IconsProvider />
	 * so that all icons are available in each view
	 */
	const injected = Inject.all(getComponent, components);
	return (
		<div {...props}>
			{injected('children')}
			{props.children}
		</div>
	);
}

App.propTypes = {
	children: PropTypes.element,
	...cmfConnect.propTypes,
};

export default cmfConnect({
	withComponentRegistry: true,
})(App);
