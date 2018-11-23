import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import ListContainer from './components/ListContainer';
import ListItem from './components/ListItem';
import PropTypes from 'prop-types';
import locals from './data/locals';


//import MapContainer from './components/MapContainer';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      venues: [],
      marker: [],
      
    }}


  componentDidMount = () => {
    this.getLocals();
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCLVCGUR9jUVe3DkVKspecXg0pCgMK1E1M&callback=initMap')
    
  
  }


 // Get data for eating locals
 getLocals = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    client_id: "FTPQMQKRBNIJJDPKNGWFMUHD3KBP1OIYX0YZ5BU250CILCD4",
    client_secret: "EZ3ACLWE1RBXRJSHLQCE0RU4DIYJTQB1SOEVVIK10OFKCR1F",
    query: "cafe",
    //ll: "48.208416, 16.37347",
    near: "Vienna",
    limit: 10,
    v: "20181108"
  }

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {console.log(response.data.response.groups[0])
      this.setState({
        //at search? the value of venues are: venues: response.data.response.venues
        venues:response.data.response.groups[0].items[0]['venue']

      },  
      this.initMap())
      //console.log(response.data.response.venues)
    })
    .catch(error => {
      console.log("Sorry, there's an ERROR during fetching data by Foursquare API:-( " + error)
    })
  }

  //Initialize and add the map
  initMap = () => {
    // The map, centered at Vienna
    var map = new window.google.maps.Map(
        document.getElementById('map'), 
        {zoom: 14, 
          center: {lat: 48.208418, lng: 16.373231}
        });

    /*Show up the markers BUG: returning undefined
    this.state.venues.map(singleVenue =>{
    

        const marker = new window.google.maps.Marker({
        position: {position},
        map: map,
        title:"Hi Dude"
      })
      return marker;
    })*/
    //Looping through the data file for making markers
    for (let i = 0; i < locals.length; i++) {
      
      let position = locals[i].position;
      let name = locals[i].name;
      let id = locals[i].foursquare-id

    //Create the markers on the map
      let marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: name,
        id: id
      });

    //markers.push(marker);
    } 
  } 

  

  render() {  
    
    {/*/ Listview of the eating locals
    const listOfLocals = locals
    //Making the searched term case insensitive
    .filter(searchedLocals => {searchedLocals.toLowerCase().includes(locals.name.toLowerCase())}

    //let eatingLocals = this.state.locals.name;
    */}
    return (
      
 
      <main className = 'app'>
        <Header />
        <ListContainer listOfLocals={locals.name} />
        <div id='map'></div>
        <Footer />
      </main>
    );
  }
}

export default App;

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
  
  //TODO: add errormessage
}



App.propTypes = {
  venues: PropTypes.array.isRequired
}