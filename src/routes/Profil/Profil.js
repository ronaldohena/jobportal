import React, { Component } from "react";
import { images } from "../../config";
import "./profil.css";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

class Profil extends Component {
  constructor() {
    super();
    this.state = { fields: {}, errors: {} };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
  /* 
  username,
    password,
    email,
    name,
    age,
    job,
    language,
    wage,
    postal_code,
    phone,
    city,
    address
  */

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["profesioni"] = "";
      fields["gjuha"] = "";
      fields["mosha"] = "";
      fields["paga"] = "";
      fields["kodi"] = "";
      fields["pershkrimi"] = "";
      fields["tel"] = "";
      fields["email"] = "";
      fields["qyteti"] = "";
      fields["adresa"] = "";
      this.setState = { fields: fields };
      alert("Form submit");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //name
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Ju lutem vendosni emrin.";
    }
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["username"] = "*Ju lutem vendosni emrin e sakte.";
      }
    } //mobile
    if (!fields["tel"]) {
      formIsValid = false;
      errors["tel"] = "*Ju lutem vendosni numrin e telefonit.";
    }
    if (typeof fields["tel"] !== "undefined") {
      if (!fields["tel"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["tel"] = "*Ju lutem vendosni numrin e sakte. ";
      }
    }
    //profesioni
    if (!fields["profesioni"]) {
      formIsValid = false;
      errors["profesioni"] = "*Ju lutem vendosni profesionin tuaj.";
    }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Ju lutem vendosni adresen e email.";
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
        errors["email"] = "*Vendosni adresene sakte te email.";
      }
    }
    //adresa
    if (!fields["adresa"]) {
      formIsValid = false;
      errors["adresa"] = "*Ju lutem vendosni adresen e plote .";
    } //Gjuha
    if (!fields["gjuha"]) {
      formIsValid = false;
      errors["gjuha"] = "*Ju lutem vendosni gjuhen tuaj.";
    } //mosha
    if (!fields["mosha"]) {
      formIsValid = false;
      errors["mosha"] = "*Ju lutem vendosni moshen.";
    } //qyteti
    if (!fields["qyteti"]) {
      formIsValid = false;
      errors["qyteti"] = "*Ju lutem vendosn qytetin tuaj.";
    } //paga
    if (!fields["paga"]) {
      formIsValid = false;
      errors["paga"] = "*Ju lutem vendosni pagen .";
    } //kodi postar
    if (!fields["kodi"]) {
      formIsValid = false;
      errors["kodi"] = "*Ju lutem vendosni kodin postar.";
    } //pershkrimi
    if (!fields["pershkrimi"]) {
      formIsValid = false;
      errors["pershkrimi"] = "*Ju lutem vendosni te dhenat tuaja.";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  render() {
    return (
      <div>
        <img className="logo8" src={images.fotoP} />
        <div className="profil8">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <h1>Te dhenat personale</h1>
              </div>

              <div class="col-lg-6 col-md-6">
                <div>
                  <NavLink to="/home">
                    <button className="back8">Ktheu</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <hr />

            <form
              method="post"
              name="user"
              onSubmit={this.submituserRegistrationForm}
            >
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <label>Emri:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="Tom"
                    name="username"
                    value={this.state.fields.username}
                    onChange={this.handleChange}
                  />
                  <div className="error8">{this.state.errors.username}</div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <label>Profesioni:</label>
                  <br />
                  <input
                    className="form-emri"
                    type="text"
                    placeholder="Programues"
                    name="profesioni"
                    value={this.state.fields.profesioni}
                    onChange={this.handleChange}
                  />
                  <div className="error8">{this.state.errors.profesioni}</div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <label>Gjuha:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="Anglisht"
                    name="gjuha"
                    value={this.state.fields.gjuha}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.gjuha}</div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <label>Mosha:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    name="mosha"
                    placeholder="21 vjec"
                    value={this.state.fields.mosha}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.mosha}</div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <label>Paga:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="20 000L"
                    name="paga"
                    value={this.state.fields.paga}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.paga}</div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <label>Kodi postar:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="9400"
                    name="kodi"
                    value={this.state.fields.kodi}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.kodi}</div>
                </div>
              </div>

              <label>Pershkrim:</label>
              <br />
              <textarea className="form-emri" />

              <h1>Kontaktet</h1>
              <hr />
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <label>Tel:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="+355"
                    name="tel"
                    value={this.state.fields.tel}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.tel}</div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <label>Email:</label>
                  <br />
                  <input
                    type="e-mail"
                    className="form-emri"
                    placeholder="email@emri.com"
                    name="email"
                    value={this.state.fields.email}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.email}</div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <label>Qyteti:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="Tirane"
                    name="qyteti"
                    value={this.state.fields.qyteti}
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="error8">{this.state.errors.qyteti}</div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <label>Adresa e plote:</label>
                  <br />
                  <input
                    type="text"
                    className="form-emri"
                    placeholder="Rruga "
                    name="adresa"
                    value={this.state.fields.adresa}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <div className="error8">{this.state.errors.adresa}</div>
                </div>
              </div>

              <button type="submit" className="margin8">
                Dergo
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Profil;
