import React, {useState} from 'react'
import Ps2Image from '../images/ps2.jpg'
import CharacterBar from '../components/CharacterBar';
import Kratos from '../images/characters/kratos.jpg'
import Prince from '../images/characters/prince.jpg'
import JakDaxter from '../images/characters/jakdaxter.jpg'

const Ps2 = () => {
  const [charactersArray, setCharactersArray] = useState([
    {name: 'Kratos', source: Kratos},
    {name: 'Prince', source: Prince},
    {name: 'Jak And Daxter', source: JakDaxter}
  ])

  return (
    <div className="image-page ps2">
      <CharacterBar characters={charactersArray}/>
      <div className="image-center">
        <img src={Ps2Image} className="main-image"/>
      </div>
    </div>
  )
}

export default Ps2