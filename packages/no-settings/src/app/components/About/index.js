import React from 'react';
import { put, call, takeEvery } from 'redux-saga/effects';
import cmf, { cmfConnect } from '@talend/react-cmf';

const About = () => <h2>About</h2>;

function* onAbout(action) {
	console.log('onAbout', action);
	yield takeEvery('WHAT', function* noName() {
		const { response, data } = yield call(
			cmf.sagas.http.get,
			'https://jsonplaceholder.typicode.com/comments',
		);
		if (response.ok) {
			yield put(cmf.actions.collections.addOrReplace('comments', data));
		}
	});
}
About.displayName = 'About';
About.sagas = {
	'About#default': onAbout,
};

export default cmfConnect()(About);
