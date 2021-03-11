import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIssues } from "./actions";

export const MainPage = (props) => {
  //state
  const [curPage, updatePage] = useState(1);

  //props
  const { onFetchIssues } = props;

  useEffect(() => {
    if (typeof onFetchIssues === "function") onFetchIssues({ page: curPage });
  }, [curPage]);

  return (
    <div>
      test
      <button onClick={() => updatePage(curPage + 1)}>next</button>
    </div>
  );
};

MainPage.propTypes = {
  onFetchIssues: PropTypes.func,
};

function mapStateToProps(state) {
  console.log("state", state, state.issuesData);
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchIssues: (evt) => dispatch(fetchIssues(evt)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
