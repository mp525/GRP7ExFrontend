import React, { Component,useState, useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%',
  };

  function MapUs(props){
    const [zoom, setZoom]=useState(5);
    
    function zooom(){
        setZoom(zoom+5);
    }
    function antiZooom(){
        setZoom(5);
    }
    

      return (
          <Map
          onMouseover={zooom}
          onMouseout={antiZooom}
            google={props.google}
            zoom={zoom}
            style={mapStyles}
            //55.67594 12.56553
            initialCenter={{ lat: 55.768663592, lng: 12.499998}}
            
          >
          <Marker position={{ lat: 55.768663592, lng: 12.499998}} />
          
          </Map>
      );
    }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDrZNeWpAAqIz3CWLqaba8dBEVCk0JsJD8'
  })(MapUs);