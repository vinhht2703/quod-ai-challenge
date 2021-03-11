import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.scss";

export const NavigationBar = (props) => {
  return (
    <nav className="navigation-bar navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Quod AI challenge
      </a>

      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarText"
      >
        <img
          src="https://avatars.githubusercontent.com/u/49739801?s=60&amp;v=4"
          className="avatar-user"
        ></img>
        <span className="text-white ml-2">Vinh</span>
        <a role="button" className="notify-wrapper ml-4 text-light">
          <i className="bi bi-bell"></i>
        </a>
      </div>
    </nav>
  );
};

NavigationBar.propTypes = {
  highlightHistory: PropTypes.array,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
