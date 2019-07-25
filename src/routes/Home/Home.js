import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import { Navbar } from "../../routes";
import "./home1.css";

class Kerkimenehom extends Component {
  state = {
    text: "",
    city_id: null,
    job_id: null
  };

  componentDidMount() {
    if (!this.props.tokenId) {
      this.props.checkToken();
    }
    this.props.getCities();
    this.props.getJobs();
  }

  search = () => {
    const { text, city_id, job_id } = this.state;
    this.props.getPosts(text, city_id, job_id, () => {
      this.props.history.push("/njoftimepune");
    });
  };

  render() {
    const foto = {
      width: "100%",
      height: "730px",
      backgroundImage: "url(" + require("../../assets/images/foto.jpg") + ")"
    };
    console.log("Home", this.state);

    return (
      <div style={foto}>
        <Navbar />

        <h1 className="sing7"> Mundesi punesimi </h1>
        <div className="home7">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-3">
                <input
                  type="text"
                  className="forma7"
                  placeholder="Lloji i punes"
                  value={this.state.text}
                  onChange={e => this.setState({ text: e.target.value })}
                />
              </div>

              <div class="col-sm-3">
                <select
                  className="forma7"
                  value={this.state.job_id}
                  onChange={e => this.setState({ job_id: e.target.value })}
                >
                  <option default>Zgjidh</option>
                  {this.props.jobs.map(job => (
                    <option value={job.id}>{job.name}</option>
                  ))}
                </select>
              </div>

              <div class="col-sm-3">
                <select
                  className="forma7"
                  value={this.state.city_id}
                  onChange={e => this.setState({ city_id: e.target.value })}
                >
                  <option default>Zgjidh</option>
                  {this.props.cities.map(city => (
                    <option value={city.id}>{city.name}</option>
                  ))}
                </select>
              </div>

              <div class="col-sm-3" onClick={() => this.search()}>
                <button type="submit" className="button7">
                  {" "}
                  Dergo
                </button>
              </div>
            </div>
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
)(Kerkimenehom);
