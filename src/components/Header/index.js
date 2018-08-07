import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Badge from "material-ui/Badge";
import { connect } from "react-redux";
import ReactGA from "react-ga";

const Header = props => {
  const openCartEvent = () => {
    console.log("hello");
    ReactGA.event({
      category: "Cart",
      action: "Opened Cart",
      label: "Cart Usage",
      value: 1
    });
  };

  const backButtonEvent = () => {
    console.log("hello");
    ReactGA.event({
      category: "Back",
      action: "Back Button Clicked",
      label: "Back Button Usage",
      value: 1
    });

    window.history.back();
  };

  return (
    <div
      className={props.hideBackButton ? "main-menu-header-bar" : "header-bar"}
    >
      <FontAwesome
        className={props.hideBackButton ? "back-button-hidden" : "back-button"}
        name="angle-left"
        size="2x"
        style={{ marginTop: "10px" }}
        onClick={backButtonEvent}
      />

      <Link to="/" className={props.hideBackButton ? "hidden" : "name-text"}>
        {props.title ? props.title : null}
      </Link>
      <span>
        <Link
          to="/createStrip"
          className="action-button"
          onClick={openCartEvent}
        >
          <FontAwesome className="back-button" name="film" size="lg" />
          <MuiThemeProvider>
            {props.memes.length > 0 ? (
              <Badge
                badgeContent={props.memes.length}
                secondary={true}
                className="badge"
              />
            ) : null}
          </MuiThemeProvider>
        </Link>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  memes: state.memeCart.memes
});

export default connect(mapStateToProps)(Header);
