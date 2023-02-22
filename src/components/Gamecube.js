import React from 'react'
import GamecubeImage from '../images/gamecube.jpg';
import CharacterBar from '../components/CharacterBar';

const Gamecube = () => {
  return (
    <div className="image-page gamecube">
      <CharacterBar/>
      <div className="image-page-container">
        <img src={GamecubeImage} className="main-image"/>
      </div>
    </div>
  )
}

export default Gamecube