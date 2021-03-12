import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIssues, highlightIssue } from "./actions";
import {
  issuesDataSelector,
  isLoadingIssuesSelector,
  highlightedIssueSelector,
} from "./selectors";
import "./styles.scss";

export const MainPage = (props) => {
  //state
  const [curPage, updatePage] = useState(1);

  //props
  const {
    onFetchIssues,
    issuesData,
    isLoadingIssues,
    highlightedIssue,
    onHighlightIssue,
  } = props;

  useEffect(() => {
    if (!issuesData[`${curPage}`] && typeof onFetchIssues === "function")
      onFetchIssues({ page: curPage });
  }, [curPage]);

  const handlePagination = useCallback(
    (type) => {
      switch (type) {
        case "prev":
          if (curPage - 1 > 0) updatePage(curPage - 1);
          break;

        case "next":
          updatePage(curPage + 1);
          break;

        default:
          break;
      }
    },
    [curPage]
  );

  const _renderIssues = (issues) => {
    if (!Array.isArray(issues)) return null;

    return issues.map((issue) => {
      const { title, id } = issue || {};

      const isHighlighted = highlightedIssue && highlightedIssue.id == id;

      return (
        <li
          key={id}
          className={`issue-item px-3 py-2 border ${
            isHighlighted ? "highlighted" : ""
          }`}
          onClick={() => onHighlightIssue({ issue })}
        >
          <div className="issue-title">{title}</div>
          <div className="issue-id">#{id}</div>
        </li>
      );
    });
  };

  return (
    <div className="main-page-container container">
      <ul className="issues-list border">
        {isLoadingIssues ? (
          <div className="loading-container py-3">
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          _renderIssues(issuesData[`${curPage}`])
        )}
      </ul>

      <div className="pagination-container">
        <button
          className="prev-btn"
          onClick={() => handlePagination("prev")}
          disabled={curPage === 1}
        >
          prev
        </button>
        <button
          className="next-btn ml-2"
          onClick={() => handlePagination("next")}
        >
          next
        </button>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  onFetchIssues: PropTypes.func,
  onHighlightIssue: PropTypes.func,
  issuesData: PropTypes.object,
  isLoadingIssues: PropTypes.bool,
  highlightedIssue: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    issuesData: issuesDataSelector(state),
    isLoadingIssues: isLoadingIssuesSelector(state),
    highlightedIssue: highlightedIssueSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchIssues: (evt) => dispatch(fetchIssues(evt)),
    onHighlightIssue: (evt) => dispatch(highlightIssue(evt)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
