import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import * as requests from "../../services/requests";

import "./postim.css";
import { images } from "../../config";

/**title, description, user_id, city_id, job_id, address */

class Postim extends Component {
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
      const data = {
        title: this.state.fields.title,
        description: this.state.fields.description,
        user_id: this.props.user.id,
        city_id: this.state.fields.city,
        job_id: this.state.fields.job,
        address: this.state.fields.address
      };
      requests.createPost(data, result => {
        this.props.history.push("/home");
      });
      let fields = {};
      fields["puna"] = "";
      fields["email"] = "";
      this.state = { fields: fields };
      alert("Form submit");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //lloji i punes
    if (!fields["title"]) {
      formIsValid = false;
      errors["title"] = "Ju lutem vendosni titullin.";
    }
    //lloji i punes
    if (!fields["description"]) {
      formIsValid = false;
      errors["description"] = "Ju lutem vendosni pershkrimin.";
    }
    //Email
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Ju lutem vendosni adresen.";
    }
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Ju lutem vendosni qytetin.";
    }
    if (!fields["job"]) {
      formIsValid = false;
      errors["job"] = "Ju lutem vendosni qytetin.";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <img className="foto5" src={images.fotoP} />
        <div className="center5">
          <form
            method="post"
            name="user"
            onSubmit={this.submituserRegistrationForm}
          >
            <label className="sing5">Titulli:</label>
            <br />
            <input
              type="text"
              className="form5"
              placeholder="Vendosni titullin"
              name="title"
              value={this.state.fields.title}
              onChange={this.handleChange}
            />
            <br />
            <div className="error5">{this.state.errors.title}</div>

            <label className="sing5">Pershkrimi:</label>
            <br />
            <input
              type="text"
              className="form5"
              placeholder="Vendosni llojin e punes"
              name="description"
              value={this.state.fields.description}
              onChange={this.handleChange}
            />
            <br />
            <div className="error5">{this.state.errors.description}</div>

            <label className="sing5">Adresa:</label>
            <br />
            <input
              type="text"
              className="form5"
              placeholder="Vendosni adresen"
              name="address"
              value={this.state.fields.address}
              onChange={this.handleChange}
            />
            <div className="error5">{this.state.errors.address}</div>

            <label className="sing5">Qyteti:</label>
            <br />
            <select
              className="form5"
              name="city"
              onChange={this.handleChange}
              value={this.state.fields.city}
            >
              <br />
              <option default>Zgjidh</option>
              {this.props.cities.map(city => (
                <option value={city.id}>{city.name}</option>
              ))}
            </select>
            <br />
            <div className="error5">{this.state.errors.city}</div>
            <br />

            <label className="sing5">Pozicioni i punes:</label>
            <br />
            <select
              className="form5"
              name="job"
              onChange={this.handleChange}
              value={this.state.fields.job}
            >
              <br />
              <option default>Zgjidh</option>
              {this.props.jobs.map(job => (
                <option value={job.id}>{job.name}</option>
              ))}
            </select>
            <br />
            <div className="error5">{this.state.errors.job}</div>
            <br />

            <input className="buton5" type="submit" value="Dergo" />
          </form>
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
)(Postim);
