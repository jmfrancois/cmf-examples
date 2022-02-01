const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: '../../node_modules/primereact/resources', to: 'primereact' },
				{ from: '../../node_modules/primeicons', to: 'primeicons' },
			],
		}),
	],
};
