import React from "react";
import "./style.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Badge from "material-ui/Badge";
import { connect } from "react-redux";

const Header = props => {
  return (
    <div
      className={props.hideBackButton ? "main-menu-header-bar" : "header-bar"}
    >
      <FontAwesome
        className={props.hideBackButton ? "back-button-hidden" : "back-button"}
        name="angle-left"
        size="2x"
        style={{ marginTop: "10px" }}
        onClick={() => window.history.back()}
      />

      <Link to="/" className={props.hideBackButton ? "hidden" : "name-text"}>
        {props.title ? props.title : null}
      </Link>
      <Link to="/createStrip" className="action-button">
        <FontAwesome
          className="back-button"
          name="film"
          size="lg"
          style={{ marginTop: "10px" }}
        />
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
    </div>
  );
};

const mapStateToProps = state => ({
  memes: state.memeCart.memes
});

export default connect(mapStateToProps)(Header);
