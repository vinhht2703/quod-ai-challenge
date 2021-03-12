import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR,
  HIGHLIGHT_ISSUE,
  HIGHLIGHT_ISSUE_ERROR,
  HIGHLIGHT_ISSUE_SUCCESS,
} from "./constants";
import produce from "immer";

// The initial state of the MainPage
export const initialState = {
  isLoadingIssues: false,
  error: false,
  issuesData: {},
  highlightHistory: [],
};

const mainReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { payload, error } = action || {};

    switch (action.type) {
      case FETCH_ISSUES:
        draft.isLoadingIssues = true;
        break;

      case FETCH_ISSUES_SUCCESS:
        const { page, issues } = payload || {};

        if (typeof draft.issuesData === "object")
          draft.issuesData[`${page}`] = issues;
          
        draft.isLoadingIssues = false;

        break;

      case FETCH_ISSUES_ERROR:
        draft.isLoadingIssues = true;
        draft.error = error;
        break;

      case HIGHLIGHT_ISSUE:
        break;

      case HIGHLIGHT_ISSUE_SUCCESS:
        break;

      case HIGHLIGHT_ISSUE_ERROR:
        break;

      default:
        break;
    }
  });

export default mainReducer;
