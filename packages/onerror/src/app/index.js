/**
 * Import theme.
 * Being the first import is important, so that it is the default style
 * and other style can override it
 */
import cmf from '@talend/react-cmf';
import Layout from '@talend/react-components/lib/Layout';
import IconsProvider from '@talend/react-components/lib/IconsProvider';
import HeaderBar from '@talend/react-containers/lib/HeaderBar';
import Notification from '@talend/react-containers/lib/Notification';

import actionCreators from './actions';
import components from './components';
import expressions from './expressions';
import reducer from './reducers';
import * as sagas from './sagas';
import saga from './saga';
import ErrorPage from './components/ErrorPage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	react: {
		useSuspense: false,
	},
});

const littleContainers = {
	id: 'containers',
	components: {
		Layout,
		HeaderBar,
		IconsProvider,
		Notification,
	},
};

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
	actionCreators,
	components,
	expressions,
	reducer,
	saga,
	sagas,
	settingsURL: '/settings.json',
	AppLoader: 'AppLoader',
	modules: [littleContainers],
	RootComponent: (props) => <ErrorPage {...props} />,
});
