import { takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";

function* onSaga(action) {
    yield delay(1000);
    throw new Error(`saga wait too long after ${action.type}`);
}

export default function* main() {
    yield takeEvery('MY_SAGA', onSaga);
}
