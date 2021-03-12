import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const NotificationPopup = (props) => {
  const { highlightHistory, visible } = props || {};

  return <div className="notification-container">text</div>;
};

NotificationPopup.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPopup);
