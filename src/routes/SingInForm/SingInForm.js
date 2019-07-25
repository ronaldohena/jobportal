import React, { Component } from "react";
import { BrowserRouter as NavLink, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import "./singin.css";

class SingInForm extends Component {
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
      height: "800px",
      backgroundImage: "url(" + require("../../assets/images/foto.jpg") + ")"
    };

    return (
      <div className="center12" style={foto}>
        <div className="center3">
          <h3 className="sing3">Kyçu</h3>
          <form
            method="post"
            name="user3"
            onSubmit={this.submituserRegistrationForm}
          >
            <label className="em3"> Adresa e emalit*</label>
            <br />
            <input
              type="e-mail"
              className="form3"
              placeholder="Adresa e email"
              name="email"
              value={this.state.fields.email}
              onChange={e => this.handleChange(e)}
            />
            <div className="error3">{this.state.errors.email}</div>

            <label className="em3"> Fjalekalimi*</label>
            <br />
            <input
              type="password"
              className="form3"
              placeholder="Fjalekalimi"
              name="password"
              value={this.state.fields.password}
              onChange={e => this.handleChange(e)}
            />
            <div className="error3">{this.state.errors.password}</div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <button submit="submit" className="buton3">
                    Kyçu
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SingInForm);
