import { takeEvery, call, put } from 'redux-saga/effects';
import cmf from '@talend/react-cmf';
import { HELLO_REDUX_TYPE } from '../constants';

function* getData(action) {
	console.log('getData', action);
	const { response, data } = yield call(
		cmf.sagas.http.get,
		'https://jsonplaceholder.typicode.com/todos',
	);
	if (response.ok) {
		yield put(cmf.actions.collections.addOrReplace('todos', data));
	}
}

export default function* main() {
	yield takeEvery(HELLO_REDUX_TYPE, getData);
}
