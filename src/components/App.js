import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './navbar'
import MainMenu from './mainmenu.1'
import Footer from './footer'


class App extends Component {

  render() {
    return (
      <div className = 'app'>
        <NavBar />
        <MainMenu />
        {/* <Footer />  */}
      </div>
    );
  }
}

export default App;
