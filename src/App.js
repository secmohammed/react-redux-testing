import React, { Component } from 'react';
import './assets/styles/header.scss'
import './assets/styles/app.scss'
import Header from './components/Header.js'
import Headline from './components/Headline.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" />
        </section>
      </div>
    );
  }
}

export default App;
