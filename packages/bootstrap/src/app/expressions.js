import get from 'lodash/get';

function getSettings({ context }, path) {
	let settings = context.store.getState().cmf.settings;
	if (!settings) {
		return '';
	}
	if (path) {
		settings = { props: { [path]: get(settings, `props.${path}`) }};
	} else {
		settings = { props: settings.props };
	}
	return JSON.stringify(settings, null, 2);
}

function getRegistry({ context }, filter) {
	if (filter) {
		const result = {};
		Object.keys(context.registry).filter(key => key.startsWith(filter)).forEach(key => {
			result[key] = context.registry[key].toString().split('\n')[0];
		});
		return JSON.stringify(result, null, 2);
	}
	return JSON.stringify(context.registry, null, 2);
}

export default {
	getSettings,
	getRegistry,
};
