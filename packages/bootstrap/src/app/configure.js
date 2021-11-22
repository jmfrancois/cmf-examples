import { api } from '@talend/react-cmf';
import React from 'react';
import * as components from 'react-bootstrap';
import mycomponents from './components';
import wrap from './wrap';
import expressions from './expressions';


export default {
	initialize() {
		/**
		 * Register components in CMF Components dictionary
		 */
		const connected = {};
		Object.keys(components).forEach(key => {
			// TODO: check displayName
			connected[key] = wrap(components[key], key);
		});
		api.component.registerMany(connected);
		api.component.registerMany(mycomponents);
		api.expression.registerMany(expressions);
	},
};
