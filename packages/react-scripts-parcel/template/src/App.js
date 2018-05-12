import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to your React ⚛️ + Parcel 📦 app!</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <A href="https://reactjs.org/">Learn React</A>
          <A href="https://parceljs.org/getting_started.html">Learn Parcel</A>
        </header>
      </div>
    );
  }
}

function A(props) {
  const { href, children } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
export default App;
