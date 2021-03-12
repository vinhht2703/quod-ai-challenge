import { call, put, takeLatest, select } from "redux-saga/effects";
import { FETCH_ISSUES, HIGHLIGHT_ISSUE } from "./constants";
import {
  fetchIssuesError,
  fetchIssuesSuccess,
  highlightIssueError,
  highlightIssueSuccess,
} from "./actions";
import { issuesDataSelector, highlightedIssueSelector } from "./selectors";

export function* fetchIssues(action) {
  try {
    const { payload } = action || {};
    const { page } = payload || {};
    const issuesData = yield select(issuesDataSelector);

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

export function* highlightIssue(action) {
  try {
    const { payload } = action || {};
    const { issue } = payload || {};
    const { id: newIssueId } = issue || {};
    const highlightedIssue = yield select(highlightedIssueSelector);
    const { id: curIssueId } = highlightedIssue || {};

    if (newIssueId && curIssueId && newIssueId === curIssueId) {
      yield put(highlightIssueSuccess({ issue: {} }));
    } else if (newIssueId) {
      yield put(highlightIssueSuccess({ issue: issue }));
    }
  } catch (err) {
    yield put(highlightIssueError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* watchFetchIssues() {
  yield takeLatest(FETCH_ISSUES, fetchIssues);
}

export function* watchHighlightIssue() {
  yield takeLatest(HIGHLIGHT_ISSUE, highlightIssue);
}
