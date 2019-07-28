import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

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
      <MainDiv>
        <NavLink to="/home">
          <LeftButton>Kryefaqja</LeftButton>
        </NavLink>
        <NavLink to="/njoftimepune">
          <LeftButton onClick={this.search}>
            Njoftimet
          </LeftButton>
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/postim">
            <RightButton>Posto Njoftim</RightButton>
          </NavLink>
        ) : (
          <NavLink to="/sing-in">
            <RightButton>Kyçu</RightButton>
          </NavLink>
        )}

        {isLoggedIn ? (
          <RightButton onClick={() => this.props.logout()}>
            Dil
          </RightButton>
        ) : (
          <NavLink to="/sing-up">
            <RightButton>Regjistrohu</RightButton>
          </NavLink>
        )}
      </MainDiv>
    );
  }
}

const LeftButton = styled.button`
  margin-left: 1%;
  font-size: 20px;
`
const RightButton = styled.button`
  float: right;
  font-size: 20px;
  margin-right: 3%;
  background-color: rgb(66, 171, 231);
  color: white;
  &:hover {
    color: black;
    background-color: white;
  }
`

const MainDiv = styled.div`
  padding-top: 3%;
  margin-left: 5%;
`

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  tokenId: auth.tokenId
});

export default connect(
  mapStateToProps,
  actions
)(Navbar);
