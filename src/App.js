import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import Main from './components/common/Main';

class App extends Component {
  render() {
    return (
       <div className="App container-fluid">
        <Header />
        <Main />
       </div>
    );
  }
}

export default App;
