import React, { Component } from "react";
import { BrowserRouter as NavLink,Link } from "react-router-dom";
import { images } from "../../config";
import "./switch.css";
class Switch extends Component {

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
    fields["password"] = "";
    this.setState = ({fields:fields});
    alert("Form submit");
  }
 }
  validateForm(){
    let fields = this.state.fields;
    let errors ={};
    let formIsValid = true;
   //Email
    if(!fields["email"]){
     formIsValid = false;
     errors["email"] ="Ju lutem vendosni adresen e email.";
    }
    if(typeof fields["email"]!=="undefined"){
      let lastatpos = fields["email"].lastIndexOf('@');
      let lastdotpos=fields["email"].lastIndexOf('.');
      if(!(lastatpos<lastdotpos && lastatpos>0 && fields["email"].indexOf('@@')==-1 && lastdotpos>2 &&fields["email"].length -lastdotpos>2)){
      formIsValid  = false;
      errors["email"] ="Vendosni adresen e sakte te email.";
      }
 }//password
   if(!fields["password"]){
    formIsValid = false;
    errors["password"] ="Ju lutem vendosni password.";
 }
 if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match
    (/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    formIsValid = false;
    errors["password"] ="Ju lutem vendosni passwordin e sakte."
   }
 }
   this.setState({errors:errors});
   return formIsValid;
 }
  render()  {
  return (
<div class="container-fluid">
   <div class ="row">
   <div class = "col-lg-4 col-md-4">
    <div className="profil1">
  
       <div className="left1">
         <h1>Informacioni Personal</h1>
         <p>Vendosni adresen e email dhe password tuaj.</p>
       </div>
           <form method="post" name="user"
           onSubmit={this.submituserRegistrationForm}>
           <input className="form1" type="e-mail"
           placeholder="Adresa e emailit" name="email"
           value={this.state.fields.email}
           onChange={this.handleChange}/><br/>
           <div className="error1">{this.state.errors.email}</div>

           <input  className="form1" type="password"
           placeholder="Fjalekalimi" name="password"
           value={this.state.fields.password}
           onChange={this.handleChange}/><br/>
           <div class="error1">{this.state.errors.password}</div><br/>
           <button type="submit"className="buton1">Kyçu</button>
           <input className="has"type="checkbox" name="hasAgreed"/> Ruaj llogarine.
      </form>
      <div className="top1">
       <Link to="/sing-up">Keni harruar fjalekalimin?</Link>
       </div>
        <Link to="/forget">
           <button className="create1">Krijo llogarin</button>
        </Link>
      </div>
 </div>
 <div class = "col-lg-4 col-md-4">
   <img className="foto1"src={images.foto}/>
  </div>

</div>
</div>

);
}
}
export default Switch;
