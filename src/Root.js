import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  Switch,
  ForgetPassword,
  SingUpForm,
  SingInForm,
  ForgetLogin,
  Njoftime,
  NjoftimPune,
  Profil,
  Home,
  Postim,
  Pershkrimi
} from "./routes";

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/profil" component={Profil} />
          <Route path="/postim" component={Postim} />
          <Route path="/home" component={Home} />  {/*complete */}
          <Route path="/njoftimepune" component={NjoftimPune} />
          <Route path="/njoftim" component={Njoftime} /> {/*e panevojshme */}
          <Route exact path="/" component={Home} />
          <Route path="/sing-in" component={SingInForm} /> {/*complete */}
          <Route path="/sing-up" component={SingUpForm} /> {/*complete */}
          <Route path="/back" component={Switch} />
          <Route path="/forget" component={ForgetPassword} /> {/*e panevojshme*/} 
          <Route path="/submit1" component={ForgetLogin} /> {/*complete */} 
          <Route path="/pershkrimi" component={Pershkrimi} /> {/*e panevojshme*/}
        </div>
      </Router>
    );
  }
}

export default Root;
