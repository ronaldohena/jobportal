import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import "./navbar.css";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  search = () => {
    this.props.getPosts("", null, null);
  };
  render() {
    const { user, tokenId } = this.props;
    const isLoggedIn = Object.keys(user).length !== 0 && tokenId !== null;

    return (
      <div className="butonn">
        <NavLink to="/home">
          <button style={{ marginRight: "1%" }}>Kryefaqja</button>
        </NavLink>
        <NavLink to="/njoftimepune">
          <button style={{ marginRight: "1%" }} onClick={this.search}>
            Njoftimet
          </button>
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/postim">
            <button
              style={{ float: "right", marginRight: "3%" }}
              className="buton-style"
            >
              Posto Njoftim
            </button>
          </NavLink>
        ) : (
          <NavLink to="/sing-in">
            <button
              style={{ float: "right", marginRight: "3%" }}
              className="buton-style"
            >
              Kyçu
            </button>
          </NavLink>
        )}

        {isLoggedIn ? (
          <button
            style={{ float: "right", marginRight: "3%" }}
            className="buton-style"
            onClick={() => this.props.logout()}
          >
            Dil
          </button>
        ) : (
          <NavLink to="/sing-up">
            <button
              style={{ float: "right", marginRight: "1%" }}
              className="buton-style"
            >
              Regjistrohu
            </button>
          </NavLink>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  tokenId: auth.tokenId
});

export default connect(
  mapStateToProps,
  actions
)(Navbar);
