import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

// function App() {
//   return (
//     <div className="App">
 
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
 
      /* <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar> 
      <Menu />

    </div>
  );
} */

class App extends Component{

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
