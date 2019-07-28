import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import { Navbar } from "../../routes";


import styled from 'styled-components';

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
      height: "700px",
      backgroundImage: "url(" + require("../../assets/images/foto.jpg") + ")"
    };
    console.log("Home", this.state);

    return (
      <div style={foto}>
        <Navbar />

        <Title> Mundesi punesimi </Title>
        <MainDiv>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-3">
                <Input
                  type="text"
                  placeholder="Lloji i punes"
                  value={this.state.text}
                  onChange={e => this.setState({ text: e.target.value })}
                />
              </div>

              <div class="col-sm-3">
                <Select
                  value={this.state.job_id}
                  onChange={e => this.setState({ job_id: e.target.value })}
                >
                  <option default>Zgjidh</option>
                  {this.props.jobs.map(job => (
                    <option value={job.id}>{job.name}</option>
                  ))}
                </Select>
              </div>

              <div class="col-sm-3">
                <Select
                  value={this.state.city_id}
                  onChange={e => this.setState({ city_id: e.target.value })}
                >
                  <option default>Zgjidh</option>
                  {this.props.cities.map(city => (
                    <option value={city.id}>{city.name}</option>
                  ))}
                </Select>
              </div>

              <div class="col-sm-3" onClick={() => this.search()}>
                <Button type="submit" >
                  {" "}
                  Dergo
                </Button>
              </div>
            </div>
          </div>
        </MainDiv>
      </div>
    );
  }
}

const Button = styled.button`
  height: 55px;
  font-size: 20px;
  width: 100px;
  margin-left: 30%;
  margin-top: 20%;
  border-color: #03a9f4;
  border-radius: 1rem;
  background-color: #03a9f4;
  color: white;
  &:hover {
    background-color: red;
  }
`

const Input = styled.input`
  border-color:#03a9f4;
  height: 55%;
  width: 110%;
  margin-left: 1px;
  font-size: 20px;
  margin-top: 40px;
`
const Select = styled.select`
  border-color:#03a9f4;
  height: 55%;
  width: 110%;
  margin-left: 1px;
  font-size: 20px;
  margin-top: 40px;
`

const Title = styled.h1`
  padding-top: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  font-size: 60px;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #03a9f4;
`;

const MainDiv = styled.div`
  background-color: white;
  height:20%;
  width: 70%;
  border:1px solid;
  border-color: white;
  margin-left: 15%;
  margin-top: 10%;
`

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
