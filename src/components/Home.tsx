import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p><Counter /></p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <Link
            className="App-link"
            to="/about"
          >
            About
          </Link>
        </p>
      </header>
    </div>
  );
}

export default App;
