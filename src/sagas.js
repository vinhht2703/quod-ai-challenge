import { spawn } from "redux-saga/effects";
import { watchFetchIssues } from "./containers/MainPage/saga";

export default function* rootSaga() {
  yield spawn(watchFetchIssues);
}
