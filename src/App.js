import React, { Component } from 'react';
import './assets/styles/header.scss'
import './assets/styles/app.scss'
import Header from './components/Header.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
