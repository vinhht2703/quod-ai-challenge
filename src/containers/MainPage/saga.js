import {
  call,
  put,
  spawn,
  takeLatest,
  takeEvery,
  select,
} from "redux-saga/effects";
import { FETCH_ISSUES, HIGHLIGHT_ISSUE } from "./constants";
import { fetchIssuesError, fetchIssuesSuccess } from "./actions";

export function* fetchIssues(action) {
  try {
    const { payload } = action || {};
    const { page } = payload || {};
    const state = yield select();
    const { main: mainReducer } = state || {};
    const { issuesData } = mainReducer || {};

    console.log("fetchIssues", state);

    if (issuesData && issuesData[page]) return;

    const requestURL = `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=5`;
    const res = yield call(fetch, requestURL);
    const resBody = yield call([res, "json"]);

    if (resBody && resBody.length)
      yield put(fetchIssuesSuccess({ page, issues: resBody }));
  } catch (err) {
    console.log("error", err);
    yield put(fetchIssuesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* watchFetchIssues() {
  yield takeLatest(FETCH_ISSUES, fetchIssues);
}
