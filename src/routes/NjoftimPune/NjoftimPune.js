import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import { images } from "../../config";
import "./njoftimpune.css";

class NjoftimPune extends Component {
  selectPost = id => {
    this.props.getPostData(id, () => {
      this.props.history.push("/pershkrimi");
    });
  };
  render() {
    return (
      <div>
        <img className="foto9" src={images.fotoP} />
        <h1 className="title9">Njoftimet</h1>

        {this.props.posts.map(post => (
          <div className="center9" onClick={() => this.selectPost(post.id)}>
            <h2>{post.title}</h2>

            <div style={{ width: "100%" }}>
              <h6
                style={{
                  color: "rgb(64, 147, 255)",
                  fontSize: "20px",
                  marginLeft: "5%"
                }}
              >
                {post.description}
              </h6>
              <h4 className="sing9"> {post.address}</h4>

              <h8
                style={{
                  color: post.selected_user_id ? "red" : "green",
                  fontSize: "20px",
                  marginLeft: "5%"
                }}
              >
                {post.selected_user_id ? "Mbyllur" : "Hapur"}
              </h8>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  tokenId: auth.tokenId,
  cities: auth.cities,
  jobs: auth.jobs,
  posts: auth.posts
});

export default connect(
  mapStateToProps,
  actions
)(NjoftimPune);
