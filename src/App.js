import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Root from "./Root";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Root />
        </Provider>
      </div>
    );
  }
}

export default App;
