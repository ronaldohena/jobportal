import React, { Component } from "react";
//import { BrowserRouter as NavLink, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";


import styled from 'styled-components';

class SingInForm extends Component {
  constructor() {
    super();
    this.state = { fields: {}, errors: {} };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.login(
        this.state.fields.email,
        this.state.fields.password,
        success => {
          if (success) {
            this.props.history.push("/home");
          } else {
            alert("Te dhenat nuk jane te sakta");
          }
          let fields = {};
          fields["email"] = "";
          fields["password"] = "";
          this.setState({ fields: fields });
        }
      );
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Ju lutem vendosni adresen e email.";
    }
    if (typeof fields["email"] !== "undefined") {
      let lastatpos = fields["email"].lastIndexOf("@");
      let lastdotpos = fields["email"].lastIndexOf(".");
      if (
        !(
          lastatpos < lastdotpos &&
          lastatpos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastdotpos > 2 &&
          fields["email"].length - lastdotpos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Vendosni adresene sakte te email.";
      }
    }
    //password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Ju lutem vendosni fjalekalimin.";
    }
    // if (typeof fields["password"] !== "undefined") {
    //   if (
    //     !fields["password"].match(
    //       /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors["password"] = "Ju lutem vendosni fjalekalimin e sakte.";
    //   }
    // }
    this.setState({ errors: errors });
    return formIsValid;
  }


  render() {
    const foto = {
      width: "100%",
      height: "700px",
      backgroundImage: "url(" + require("../../assets/images/foto.jpg") + ")"
    };

    return (
      <MainDiv style={foto}>
        <Forma>
          <h3 
            style={{ 
              marginLeft: '40%', 
              fontSize: '35px', 
              fontFamily: 'Bitter',
              textTransform: 'uppercase'
            }} 
            className="sing3">Kyçu
          </h3>
          <form
            method="post"
            name="user3"
            onSubmit={this.submituserRegistrationForm}
          >
            <Title> Adresa e emalit*</Title>
            <br />
            <Input1
              type="e-mail"
              placeholder="Adresa e email"
              name="email"
              value={this.state.fields.email}
              onChange={e => this.handleChange(e)}
            />
            <Error>{this.state.errors.email}</Error>

            <Title>Fjalekalimi*</Title>
            <br />
            <Input1
              type="password"
              placeholder="Fjalekalimi"
              name="password"
              value={this.state.fields.password}
              onChange={e => this.handleChange(e)}
            />
            <Error >{this.state.errors.password}</Error>

            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <Login submit="submit">
                    Kyçu
                  </Login>
                </div>
                <Find href="/submit1">Keni harruar Fjalekalimin</Find>
              </div>
            </div>
          </form>
        </Forma>
      </MainDiv>
    );
  }
}

const Find = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 15px;
  margin-top: 7%;
  &:hover{
    color: red;
    text-decoration: none;
  }
  
`

const Error = styled.div`
  margin-left: 10%;
  color:red;
  font-size: 14px;
`

const MainDiv = styled.div`
  margin-top: 0px;
  padding-top: 3%;
`


const Login = styled.button`
  height: 55px;
  width: 100px;
  margin-left: 35%;
  margin-top: 10%;
  border-color: #03a9f4;
  border-radius: 1rem;
  background-color: #03a9f4;
  color: white;
  &:hover {
    background-color: red;
  }
`;

const Input1 = styled.input`
  height: 100%;
  width: 75%;
  padding: 10px 40px;
  border: 1px solid black;
  margin-right: 22%;
  border-radius: 7px;
  margin-left: 9%;
`;

const Title = styled.label`
  margin-left: 9%;
  font-size: 20px;
`;

const Forma = styled.div`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 1.3rem;
  margin-left: 33%;
  padding-top: 2%;
  padding-bottom: 5%;
  width: 40%;
  height: 57%;
  box-shadow: 0 0 10px 0 rgba(0,24,128,0.1);
`;

export default connect(
  null,
  actions
)(SingInForm);
