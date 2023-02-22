import React, { useState } from 'react';
import XboxImage from '../images/xbox.jpg';
import CharacterBar from '../components/CharacterBar';
import Beat from '../images/characters/beat.png'
import Sam from '../images/characters/sam.png'
import Raz from '../images/characters/raz.jpg'

const Xbox = () => {
  const [charactersArray, setCharactersArray] = useState([
    {name: 'Beat', source: Beat},
    {name: 'Sam', source: Sam},
    {name: 'Raz', source: Raz}
  ])

  return (
    <div className="image-page xbox"> 
      <CharacterBar characters={charactersArray}/>
      <img src={XboxImage} className="main-image"/>
    </div>
  )
}

export default Xbox