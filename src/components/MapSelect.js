import React from 'react';
import Gamecube from '../images/gamecube.jpg';
import Xbox from '../images/xbox.jpg';
import Ps2 from '../images/ps2.jpg';
import { Link } from 'react-router-dom';

const MapSelect = () => {
  return (
    <div className="map-select-container">

      <div className="map-select">
        <Link to="/Ps2">
          <img src={Ps2} className="map-select-img"></img>
        </Link> 
      </div>

      <div className="map-select">
        <Link to="/Xbox">
          <img src={Xbox} className="map-select-img"></img>
        </Link>
      </div>

      <div className="map-select">
        <Link to="/Gamecube">
          <img src={Gamecube} className="map-select-img"></img>  
        </Link>
      </div>

    </div>
  )
}

export default MapSelect