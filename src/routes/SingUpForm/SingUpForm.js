import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import * as requests from "../../services/requests";



import styled from 'styled-components';

class SingUpForm extends Component {
  constructor() {
    super();
    this.state = { fields: {}, errors: {} };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }
  /*
    -username,
    -password,
    -email,
    -name,
    -age,
    job,
    -language,
    -wage,
    -postal_code,
    phone,
    city,
    address */
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const data = {
        username: this.state.fields.user,
        password: this.state.fields.password,
        email: this.state.fields.email,
        name: this.state.fields.name,
        age: this.state.fields.age,
        language: this.state.fields.language,
        wage: this.state.fields.wage,
        postal_code: this.state.fields.postal_code,
        phone: this.state.fields.phone,
        address: this.state.fields.address
      };
      requests.signup(data, result => {
        this.props.history.push("/home");
      });
      let fields = {};
      fields["name"] = "";
      fields["user"] = "";
      fields["email"] = "";
      fields["password"] = "";
      this.state = { fields: fields };
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Ju lutem vendosni emrin.";
    }
    //Email
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
    } //emri i perdorusit
    if (!fields["user"]) {
      formIsValid = false;
      errors["user"] = "Ju lutem vendosni emrin e perdorusit.";
    } //password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Ju lutem vendosni fjalekalimin.";
    }
    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "Ju lutem vendosni moshen.";
    }
    if (!fields["language"]) {
      formIsValid = false;
      errors["language"] = "Ju lutem vendosni gjuhen.";
    }
    if (!fields["wage"]) {
      formIsValid = false;
      errors["wage"] = "Ju lutem vendosni pagesen.";
    }
    if (!fields["postal_code"]) {
      formIsValid = false;
      errors["postal_code"] = "Ju lutem vendosni kodin postar.";
    }
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Ju lutem vendosni numrin e telefonit.";
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Ju lutem vendosni adresen.";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  render() {
    const foto = {
      width: "100%",
      height: "1300px",
      backgroundImage: "url(" + require("../../assets/images/foto.jpg") + ")"
    };
    return (
      <div style={foto} class="container-fluid">
        <div class="row">
          <div>
            <MainForm >
              <Titull>Regjistrohu</Titull>

              <form
                method="post"
                name="user2"
                onSubmit={this.submituserRegistrationForm}
              >
                <Input
                  type="text"
                  placeholder="Emri"
                  name="name"
                  value={this.state.fields.name}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.name}</Error>

                <Input
                  type="text"
                  placeholder="Emri i perdoruesit"
                  name="user"
                  value={this.state.fields.user}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.user}</Error>

                <Input
                  type="e-mail"
                  placeholder="Adresa e email"
                  name="email"
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.email}</Error>

                <Input
                  type="password"
                  placeholder="Fjalekalimi"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
                <Error>{this.state.errors.password}</Error>

                <Input
                  type="text"
                  placeholder="Mosha"
                  name="age"
                  value={this.state.fields.age}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.age}</Error>

                <Input
                  type="text"
                  placeholder="Gjuha"
                  name="language"
                  value={this.state.fields.language}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.language}</Error>

                <Input
                  type="text"
                  placeholder="Paga"
                  name="wage"
                  value={this.state.fields.wage}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.wage}</Error>

                <Input
                  type="text"
                  placeholder="Kodi Postar"
                  name="postal_code"
                  value={this.state.fields.postal_code}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.postal_code}</Error>

                <Input
                  type="text"
                  placeholder="Numri i telefonit"
                  name="phone"
                  value={this.state.fields.phone}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.phone}</Error>

                <Input
                  type="text"
                  placeholder="Adresa"
                  name="address"
                  value={this.state.fields.address}
                  onChange={this.handleChange}
                />
                <br />
                <Error>{this.state.errors.address}</Error>

                <Button type="submit">
                  Dergo
                </Button>
              </form>
            </MainForm>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  tokenId: auth.tokenId,
  cities: auth.cities,
  jobs: auth.jobs
});

const Titull = styled.h1`
  font-size: 40px;
  margin-left: 20%;
  text-transform: uppercase;
`


const Error = styled.div`
  color: red;
  font-size: 18px;
  margin-left: 9%;
`

const Button = styled.button`
  height: 55px;
  width: 100px;;
  color: white;
  background-color: #03a9f4;
  border-radius: 9px;
  border: solid;
  border-color: #03a9f4;
  margin-left: 38%;
  margin-top: 8%;
  font-size: 20px;
  position: inherit;
  &:hover {
    background-color: red;
  }
`

const MainForm = styled.div`
  margin-top: 15%;
  margin-bottom: 10%;
  padding-top: 4%;
  padding-bottom: 5%;
  background-color: white;
  width: 185%;
  height: 100%;
  border: solid black;
  box-shadow: 0 0 10px 0 rgba(0, 24, 128, 0.1);
  margin-left: 120%;
  border-radius: 1.3rem;
`;

const Input = styled.input`
  height: 100%;
  width: 80%;
  border: 1px solid black;
  margin-right: 80%;
  border-radius: 1.3rem;
  margin-left: 9%;
  margin-top: 4%;
  padding: 10px 40px;
`

export default connect(
  mapStateToProps,
  actions
)(SingUpForm);
