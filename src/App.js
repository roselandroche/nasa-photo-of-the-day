import React from "react";
import "./App.css";
import Header from './Header'
import APOD from './APOD'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
      <Header />
      <APOD />
    </div>
  );
}

export default App;
