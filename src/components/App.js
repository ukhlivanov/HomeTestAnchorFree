import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './navbar'
import MainMenu from './mainmenu'



class App extends Component {

  render() {
    return (
      <div className = 'app'>
        <NavBar />
        <MainMenu />
      </div>
    );
  }
}

export default App;
