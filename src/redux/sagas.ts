import { takeEvery, call, put } from "redux-saga/effects";
import { REQUEST_DATA } from "./types";
import { loadFetchData, loadFetchDataSuccess } from "./actionData";

export function* sagaWatcher(): Generator {
  yield takeEvery(REQUEST_DATA, sagaWorker);
}

function* sagaWorker(): Generator {
  const payload = yield call(loadFetchData);
  yield put(loadFetchDataSuccess(payload));
}
