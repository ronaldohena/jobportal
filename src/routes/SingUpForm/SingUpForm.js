import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import * as requests from "../../services/requests";
import { images } from "../../config";
import "./singupform.css";

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
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div className="profil2">
              <h1 className="an2">Rregjistrohu</h1>

              <form
                method="post"
                name="user2"
                onSubmit={this.submituserRegistrationForm}
              >
                <input
                  type="text"
                  className="form2"
                  placeholder="Emri"
                  name="name"
                  value={this.state.fields.name}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.name}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Emri i perdoruesit"
                  name="user"
                  value={this.state.fields.user}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.user}</div>

                <input
                  type="e-mail"
                  className="form2"
                  placeholder="Adresa e email"
                  name="email"
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.email}</div>

                <input
                  type="password"
                  className="form2"
                  placeholder="Fjalekalimi"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
                <div className="error2">{this.state.errors.password}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Mosha"
                  name="age"
                  value={this.state.fields.age}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.age}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Gjuha"
                  name="language"
                  value={this.state.fields.language}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.language}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Paga"
                  name="wage"
                  value={this.state.fields.wage}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.wage}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Kodi Postar"
                  name="postal_code"
                  value={this.state.fields.postal_code}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.postal_code}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Numri i telefonit"
                  name="phone"
                  value={this.state.fields.phone}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.phone}</div>

                <input
                  type="text"
                  className="form2"
                  placeholder="Adresa"
                  name="address"
                  value={this.state.fields.address}
                  onChange={this.handleChange}
                />
                <br />
                <div className="error2">{this.state.errors.address}</div>

                <button type="submit" className="buton2">
                  Dergo
                </button>
              </form>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <img className="foto2" src={images.foto} />
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

export default connect(
  mapStateToProps,
  actions
)(SingUpForm);
