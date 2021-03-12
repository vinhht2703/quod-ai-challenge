import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import useOutsideClick from "../../utils/handleClickOutside";

const NotificationHistoryPopup = (props) => {
  const { highlightHistory, visible, closeNotification } = props || {};
  const popupRef = useRef(null);

  useOutsideClick(popupRef, () => {
    if (typeof closeNotification === "function") closeNotification();
  });

  return (
    <div
      ref={popupRef}
      className={`notification-history-container p-3 ${
        !visible ? "d-none" : ""
      }`}
    >
      <div className="title mb-1">Notifications</div>
      <div className="issues-list-container">
        {highlightHistory.map((issue, index) => {
          const { title, id } = issue || {};

          return (
            <div key={index} className="issue-container py-2 border-bottom">
              <div className="title-info">{title}</div>
              <div className="id-info">#{id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

NotificationHistoryPopup.propTypes = {
  highlightHistory: PropTypes.array,
  visible: PropTypes.bool,
  closeNotification: PropTypes.func,
};

export default NotificationHistoryPopup;
