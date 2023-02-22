import React from 'react';
import XboxImage from '../images/xbox.jpg';
import CharacterBar from '../components/CharacterBar';

const Xbox = () => {
  return (
    <div className="image-page xbox"> 
      <CharacterBar/>
      <img src={XboxImage} className="main-image"/>
    </div>
  )
}

export default Xbox