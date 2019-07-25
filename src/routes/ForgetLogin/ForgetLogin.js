import React, { Component } from "react";
import { BrowserRouter as NavLink, Link } from "react-router-dom";
import "./forget.css";
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
        height: '800px',
        backgroundImage: "url(" +require('../../assets/images/foto.jpg') + ")"
      };

      return(
        <div className="center14" style={foto}>
          <div className="center">
            <form method="post" name="user"
              onSubmit={this.submituserRegistrationForm}>

            <label className="em"> Adresa e email*</label><br/>
            <input type="e-mail" className ="form"
            placeholder="Adresa e email" name ="email"
            value={this.state.fields.email}
            onChange={this.handleChange}/>
            <div className="err">{this.state.errors.email}</div>


              <div class="container-fluid">
              <div class ="row">
              <div class = "col-lg-6 col-md-6">
              <Link to ="/sing-in">
              <button className="back">Ktheu</button>
              </Link>
              </div>

                    <div class = "col-lg-6 col-md-6">
                    <input type ="submit"className="submitt" value="Dergo"/>
            </div>
            </div>
            </div>
            </form>
          </div>
        </div>
  );
}
}
export default ForgetLogin;
