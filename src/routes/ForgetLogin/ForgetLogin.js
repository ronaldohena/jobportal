import React, { Component } from "react";
import { BrowserRouter as NavLink, Link } from "react-router-dom";
import styled from 'styled-components';


class ForgetLogin extends Component {
  constructor(){
     super();
     this.state={fields:{}, errors:{}}
     this.handleChange = this.handleChange.bind(this);
     this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
  
  handleChange(e){
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({fields});
  }
  
  submituserRegistrationForm(e){
    e.preventDefault();
    if (this.validateForm()){
      let fields ={};
      fields["email"] = "";
      this.setState = ({fields:fields});
      alert("Form submit");
    }
  }

  validateForm(){
    let fields = this.state.fields;
    let errors ={};
    let formIsValid = true;

    if(!fields["email"]){
      formIsValid = false;
      errors["email"] ="Ju lutem vendosni adresen e email.";
    }
     
    if(typeof fields["email"]!=="undefined"){
      let lastatpos = fields["email"].lastIndexOf('@');
      let lastdotpos=fields["email"].lastIndexOf('.');
      if(!(lastatpos<lastdotpos && lastatpos>0 && fields["email"].indexOf('@@')==-1 && lastdotpos>2 &&fields["email"].length -lastdotpos>2)){
        formIsValid  = false;
        errors["email"] ="Vendosni adresene sakte te email.";
      }
    }
    
    this.setState({errors:errors});
    return formIsValid;
  }
  
  render(){
    const foto = {
      width: '100%',
      height: '700px',
      backgroundImage: "url(" +require('../../assets/images/foto.jpg') + ")"
    };

    return(
      <Main style={foto}>
        <Forma >
         
          <form 
            method="post" 
            name="user"
            onSubmit={this.submituserRegistrationForm}>

            <Title>Harruat fjalekalimin</Title><br/>
            <Input1 
              type="e-mail" 
              placeholder="Adresa e email" name ="email"
              value={this.state.fields.email}
              onChange={this.handleChange}
            />
            <Error>{this.state.errors.email}</Error>


            <div class="container-fluid">
              <div class ="row">
                <div class = "col-lg-6 col-md-6">
                  <Link to ="/sing-in">
                    <Back>Ktheu</Back>
                  </Link>
                </div>
                <div class = "col-lg-6 col-md-6">
                  <Dergo type ="submit" value="Dergo"/>
                </div>
              </div>
            </div>
          </form>
        </Forma>
      </Main>
    );
  }
}

const Error = styled.div`
  margin-left: 10%;
  color:red;
`

const Title = styled.label`
  margin-left: 16%;
  font-size: 24px;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
`;

const Back = styled.button`
  height: 55px;
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
`;

const Input1 = styled.input`
  height: 50px;
  width: 350px;
  padding: 10px 40px;
  border: 1px solid black;
  margin-right: 80%;
  border-radius: 9px;
  margin-left: 9%;
`;


const Dergo = styled.input`
  height:55px;
  width: 100px;
  margin-top: 20%;
  margin-left: 7%;
  border-radius: 1rem;
  color: white;
  background-color: #03a9f4;
  border-color: #03a9f4;
  &:hover {
    background-color: red;
  }
`;


const Forma = styled.div`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 1.3rem;
  margin-left: 35%;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 450px;
  height: 310px;
  box-shadow: 0 0 10px 0 rgba(0,24,128,0.1);
`;

const Main = styled.div`
  padding-top: 15%;
  opacity: 1;
`;

export default ForgetLogin;
