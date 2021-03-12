import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.scss";
import { highlightHistorySelector } from "../../containers/MainPage/selectors";

export const NavigationBar = (props) => {
  //state
  const [alreadyReadNotification, readNotification] = useState(true);
  const [notificationVisible, updateNotificationVisible] = useState(false);

  //props
  const { highlightHistory } = props;

  useEffect(() => {
    if (!notificationVisible) {
      readNotification(false);
    }
  }, [highlightHistory, notificationVisible]);

  return (
    <nav className="navigation-bar navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="logo-wrapper col-4">
        <a className="navbar-brand" href="#">
          Quod AI challenge
        </a>
      </div>
      <div className="header-title-wrapper d-flex align-items-center justify-content-center col-4">
        <span className="text-light">Issues List</span>
      </div>

      <div
        className="collapse navbar-collapse d-flex justify-content-end col-4"
        id="navbarText"
      >
        <img
          src="https://avatars.githubusercontent.com/u/49739801?s=60&amp;v=4"
          className="avatar-user"
        ></img>
        <span className="text-white ml-2">Vinh</span>
        <a
          role="button"
          className="notify-wrapper ml-4 text-light"
          onClick={() => updateNotificationVisible(!notificationVisible)}
        >
          <i className="bi bi-bell"></i>
          {!alreadyReadNotification ? <i className="bi bi-dot"></i> : null}
        </a>
      </div>
    </nav>
  );
};

NavigationBar.propTypes = {
  highlightHistory: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    highlightHistory: highlightHistorySelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);