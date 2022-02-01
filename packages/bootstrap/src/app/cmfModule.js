import * as components from 'react-bootstrap';
import mycomponents from './components';
import wrap from './wrap';
import expressions from './expressions';
import myExampleReducer from './reducers/myExample';

const reducer = {
	myExample: myExampleReducer,

	/**
	 * Map your reducers here
	 */
};

const connected = {};
Object.keys(components).forEach((key) => {
	// TODO: check displayName
	connected[key] = wrap(components[key], key);
});

export default {
	id: 'app',
	settingsURL: '/settings.json',
	components: {
		...connected,
		...mycomponents,
	},
	RootComponent: (props) => <mycomponents.App componentId="default" {...props} />,
	expressions,
	reducer,
};
