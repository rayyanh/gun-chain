import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import Card from "./mainArea";
import Jumbo from "./jumbo";

const imgSize = {
  width: "75px",
  height: "auto"
};

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="./gunchainlogo.png"
            width={30}
            height={30}
            className="d-inline-block align-top"
            style={imgSize}
          />
        </a>
        <a className="navbar-brand" href="#">
          Project Gun Chain
        </a>
      </nav>
      <div>
        <div className="container">
          <br />
          <Jumbo />
          <Card
            title="View Blockchain"
            head="See transactions for guns"
            info="Click below to see the blockchain"
          />
          <br />
          <Card
            title="Add Transaction"
            head="Add a transactions for a gun"
            info="Click below to see the results"
          />
          <br />
          <Card
            title="See Latest Transaction"
            head="Grab the latest transaction from the blockchain"
            info="Click below to view"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
