import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MapContainer from './components/MapContainer';


class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <Header />
        <MapContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
