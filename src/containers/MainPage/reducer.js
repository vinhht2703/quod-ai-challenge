import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR,
  HIGHLIGHT_ISSUE,
  HIGHLIGHT_ISSUE_ERROR,
  HIGHLIGHT_ISSUE_SUCCESS,
} from "./constants";

// The initial state of the MainPage
export const initialState = {
  loading: false,
  error: false,
  issuesData: {},
  highlightHistory: [],
};

const mainReducer = (state = initialState, action) => {
  const { issuesData } = state || {};
  const { payload } = action || {};

  switch (action.type) {
    case FETCH_ISSUES:
      return state;

    case FETCH_ISSUES_SUCCESS:
      console.log("FETCH_ISSUES_SUCCESS", action);
      const { page, issues } = payload || {};
      issuesData[page] = issues;

      return { ...state, issuesData };

    case FETCH_ISSUES_ERROR:
      return state;

    case HIGHLIGHT_ISSUE:
      return state;

    case HIGHLIGHT_ISSUE_SUCCESS:
      return state;

    case HIGHLIGHT_ISSUE_ERROR:
      return state;

    default:
      return state;
  }
};

export default mainReducer;
