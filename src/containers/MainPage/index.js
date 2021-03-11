import React from "react";
import { connect } from "react-redux";

export const MainPage = (props) => {
  return <div>test</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
