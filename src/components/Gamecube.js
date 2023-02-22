import React, { useState } from 'react'
import GamecubeImage from '../images/gamecube.jpg';
import CharacterBar from '../components/CharacterBar';
import Mario from '../images/characters/mario.jpg'
import Monkey from '../images/characters/monkey.jpg'
import Boo from '../images/characters/boo.jpeg'

const Gamecube = () => {
  const [charactersArray, setCharactersArray] = useState([
    {name: 'Mario', source: Mario},
    {name: 'Monkey', source: Monkey},
    {name: 'Boo', source: Boo}
  ])

  return (
    <div className="image-page gamecube">
      <CharacterBar characters={charactersArray}/>
      <div className="image-page-container">
        <img src={GamecubeImage} className="main-image"/>
      </div>
    </div>
  )
}

export default Gamecube