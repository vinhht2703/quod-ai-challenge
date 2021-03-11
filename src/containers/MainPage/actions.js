import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR,
  HIGHLIGHT_ISSUE,
  HIGHLIGHT_ISSUE_ERROR,
  HIGHLIGHT_ISSUE_SUCCESS,
} from "./constants";

export function fetchIssues(payload) {
  return {
    type: FETCH_ISSUES,
    payload,
  };
}

export function fetchIssuesSuccess(payload) {
  return {
    type: FETCH_ISSUES_SUCCESS,
    payload,
  };
}

export function fetchIssuesError(error) {
  return {
    type: FETCH_ISSUES_ERROR,
    error,
  };
}

export function highlightIssue(payload) {
  return {
    type: HIGHLIGHT_ISSUE,
    payload,
  };
}

export function highlightIssueSuccess(payload) {
  return {
    type: HIGHLIGHT_ISSUE_SUCCESS,
    payload,
  };
}

export function highlightIssueError(error) {
  return {
    type: HIGHLIGHT_ISSUE_ERROR,
    error,
  };
}
