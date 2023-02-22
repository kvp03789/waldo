import React from 'react'
//import JakDaxter from '../images/characters/jakdaxter.png';
//import Kratos from '../images/characters/kratos.jpg';
//import Prince from '../images/characters/prince.jpg';

const CharacterBar = (props) => {
  return (
    <div className="character-bar-container">
      {
        props.characters.map((char) => (
          <div className="character-bar">
            <img src={char.source} className="character-bar-img"/>
            <p className="char-name">{char.name}</p>
          </div>
        ))
        
      }
    </div>
  )
}

export default CharacterBar