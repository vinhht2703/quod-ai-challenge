import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.scss";
import { highlightHistorySelector } from "../../containers/MainPage/selectors";
import NotificationHistoryPopup from "../NotificationHistoryPopup";

export const NavigationBar = (props) => {
  //state
  const [alreadyReadNotification, readNotification] = useState(true);
  const [notificationVisible, updateNotificationVisible] = useState(false);

  //props
  const { highlightHistory } = props;

  useEffect(() => {
    if (!notificationVisible) {
      readNotification(true);
    }
  }, [notificationVisible]);

  useEffect(() => {
    if (Array.isArray(highlightHistory) && highlightHistory.length)
      readNotification(false);
  }, [highlightHistory]);

  const closeNotification = useCallback(() => {
    if (notificationVisible) updateNotificationVisible(false);
  });

  return (
    <nav className="navigation-bar navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="logo-wrapper col-sm-4">
        <a className="navbar-brand text-truncate" href="#">
          Javascript
        </a>
      </div>
      <div className="header-title-wrapper d-flex align-items-center justify-content-center col-sm-4 col-6">
        <span className="text-light">Algorithm Exercises</span>
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
        <NotificationHistoryPopup
          visible={notificationVisible}
          highlightHistory={highlightHistory}
          closeNotification={closeNotification}
        ></NotificationHistoryPopup>
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
