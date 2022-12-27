import React, { Component } from "react";
import Note from "./components/Note";
class App extends Component {
  

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <div>
          <Note/>
        </div>
      </div>
    );
  }
}

export default App;