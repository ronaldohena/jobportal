import React, { Component } from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import * as requests from "../../services/requests";
import "./pershkrimi.css";
import { images } from "../../config";

class Pershkrimi extends Component {
  state = {
    requests: []
  };

  componentDidMount() {
    this.getRequests();
  }

  getRequests = () => {
    const { postData } = this.props;
    if (Object.keys(postData).length !== 0) {
      requests.getPostApplication(postData.user_id, postData.id, result => {
        console.log("result.data.users", result.data.users);

        this.setState({ requests: result.data.users });
      });
    }
  };

  sendRequest = () => {
    const { postData, user } = this.props;

    requests.requestApplication(postData.user_id, user.id, postData.id, res => {
      console.log("res", res);
      this.getRequests();
      this.props.getPostData(postData.id);
    });
  };

  selectRequest = selected_user_id => {
    const { postData } = this.props;

    requests.selectApplication(
      postData.user_id,
      selected_user_id,
      postData.id,
      res => {
        console.log("res1", res);

        this.getRequests();
        this.props.getPostData(postData.id);
      }
    );
  };

  renderButton = (postData, request) => {
    if (postData.selected_user_id && postData.selected_user_id === request.id) {
      return <div className="tip-button">Fituesi</div>;
    }
    if (postData.selected_user_id) {
      return <div />;
    }
    return (
      <button onClick={() => this.selectRequest(request.id)}>Zgjidh</button>
    );
  };

  renderDetails = () => {
    const { postData, user } = this.props;
    if (postData.user_id === user.id) {
      return (
        <div>
          <h4>Aplikuesit</h4>

          {this.state.requests.map(request => (
            <div>
              <p>{request.name}</p>

              {this.renderButton(postData, request)}
            </div>
          ))}
        </div>
      );
    }
    if (postData.selected_user_id) {
      return (
        <h6>
          *Ky postim eshte mbyllur{" "}
          {postData.selected_user_id === user.id && "Ju jeni fitues"}
        </h6>
      );
    }
    const index = this.state.requests.findIndex(i => i.id === user.id);
    if (index !== -1) {
      return <div className="tip-button">Ju keni aplikuar per kete postim</div>;
    } else {
      return (
        <button className="tip-button" onClick={this.sendRequest}>
          Apliko
        </button>
      );
    }
  };

  render() {
    const { postData, cities, jobs } = this.props;
    if (Object.keys(postData).length === 0) {
      return <div />;
    }
    const cityIndex = cities.findIndex(i => i.id === postData.city_id);
    const jobIndex = jobs.findIndex(i => i.id === postData.job_id);

    return (
      <div>
        <img className="foto-style" src={images.fotoP} />
        <div className="poz1">
          <h2>{postData.title}</h2>
          <h4>Pershkrimi i Punes</h4>
          <hr />
          <p>{postData.description}</p>
          <h4>Detajet e Aplikimit</h4>
          <hr />
          <ol>
            <li>Profesioni - {jobs[jobIndex].name}</li>
            <li>Qyteti - {cities[cityIndex].name}</li>
            <li>Adresa - {postData.address}</li>
          </ol>
          <br />

          {this.renderDetails()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  tokenId: auth.tokenId,
  cities: auth.cities,
  jobs: auth.jobs,
  posts: auth.posts,
  postData: auth.postData
});

export default connect(
  mapStateToProps,
  actions
)(Pershkrimi);
