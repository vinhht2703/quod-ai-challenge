import { spawn } from "redux-saga/effects";
import {
  watchFetchIssues,
  watchHighlightIssue,
} from "./containers/MainPage/saga";

export default function* rootSaga() {
  yield spawn(watchFetchIssues);
  yield spawn(watchHighlightIssue);
}
