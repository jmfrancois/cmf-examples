import React from 'react';
import omit from 'lodash/omit';
import { cmfConnect } from '@talend/react-cmf';
import { Inject } from '@talend/react-components';

function App({ getComponent, components, ...props }) {
	/**
	 * Instanciate all global components here
	 * Ex : we register @talend/react-components <IconsProvider />
	 * so that all icons are available in each view
	 */
	const injected = Inject.all(getComponent, components);
	const newprops = Object.assign({}, omit(props, [
		'location',
		'params',
		'route',
		'router',
		'routeParams',
		'routes',
		...cmfConnect.INJECTED_PROPS,
	]));
	return (
		<div {...newprops}>
			{injected('children')}
			{props.children}
		</div>
	);
}

App.propTypes = {
	children: React.PropTypes.element,
	...cmfConnect.propTypes,
};

export default cmfConnect({})(App);
