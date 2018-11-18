import React, { Component} from 'react';
;

class MapContainer extends React.Component {

    componentDidMount = () => {
        
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCLVCGUR9jUVe3DkVKspecXg0pCgMK1E1M&callback=initMap')
        //Get locals
        
    }

 

   

    // Initialize and add the map
    initMap = () => {
        // The map, centered at Vienna
        var map = new window.google.maps.Map(
            document.getElementById('map'), {zoom: 14, center: {lat: 48.208418, lng: 16.373231}});
        // The marker, positioned at Vienna
        //var marker = new google.maps.Marker({position: vienna, map: map});
        
        //this.setState({map})
    }

    render() {
        return (
            <div id='map'>
            </div>
        )
    }
  }

export default MapContainer;

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    
    //TODO: add errormessage
}
