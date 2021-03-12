import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIssues } from "./actions";
import { issuesDataSelector, isLoadingIssuesSelector } from "./selectors";
import "./styles.scss";

export const MainPage = (props) => {
  //state
  const [curPage, updatePage] = useState(1);

  //props
  const { onFetchIssues, issuesData, isLoadingIssues } = props;

  console.log("issuesData", issuesData, props);

  useEffect(() => {
    if (!issuesData[`${curPage}`] && typeof onFetchIssues === "function")
      onFetchIssues({ page: curPage });
  }, [curPage]);

  const handlePagination = (type) => {
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
  };

  return (
    <div className="main-page-container container">
      <ul className="issues-list border">
        {isLoadingIssues ? (
          <div className="loading-container py-3">
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
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

const _renderIssues = (issues) => {
  if (!Array.isArray(issues)) return null;

  return issues.map((iss) => {
    const { title, id } = iss || {};

    return (
      <li className="issue-item px-3 py-2 border">
        <div className="issue-title">{title}</div>
        <div className="issue-id">#{id}</div>
      </li>
    );
  });
};

MainPage.propTypes = {
  onFetchIssues: PropTypes.func,
  issuesData: PropTypes.object,
  isLoadingIssues: PropTypes.bool,
};

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    issuesData: issuesDataSelector(state),
    isLoadingIssues: isLoadingIssuesSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchIssues: (evt) => dispatch(fetchIssues(evt)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
