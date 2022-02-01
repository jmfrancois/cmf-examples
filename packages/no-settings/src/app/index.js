import React from 'react';
import cmf from '@talend/react-cmf';
import App from './components/App';
import components from './components';
import saga from './saga';

/**
 * Initialize CMF
 * This will:
 * - Register your components in the CMF registry
 * - Register your action creators in CMF registry
 * - Setup redux store using reducer
 * - Fetch the settings
 * - render react-dom in the dom 'app' element
 * API: https://github.com/Talend/ui/blob/master/packages/cmf/src/bootstrap.md
 */
cmf.bootstrap({
	components,
	saga,
	settingsURL: '/settings.json',
	RootComponent: (props) => <App {...props} />,
});
