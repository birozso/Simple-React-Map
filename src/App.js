import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import MapContainer from './components/MapContainer';


class App extends Component {
 componentDidMount (){
   this.getLocals()
 }
  
  // Get Venues
  getLocals = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?"
    const parameters = {
      client_id: "FTPQMQKRBNIJJDPKNGWFMUHD3KBP1OIYX0YZ5BU250CILCD4",
      client_secret: "EZ3ACLWE1RBXRJSHLQCE0RU4DIYJTQB1SOEVVIK10OFKCR1F",
      query: "cafe",
      //ll: "48.208416, 16.37347",
      near: "Vienna",
      v: "20181108"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.venues
         })
        //console.log(response.data.response.venues)
      })
      .catch(error => {
        console.log("Sorry, there's an ERROR during at axios:-( " + error)
      })
    }

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
