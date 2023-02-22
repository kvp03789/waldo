import React from 'react';
import Header from './components/Header.js';
import MapSelect from './components/MapSelect.js';
import { Routes, Route } from 'react-router-dom';
import Gamecube from './components/Gamecube';
import Ps2 from './components/Ps2';
import Xbox from './components/Xbox';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/mapselect" element={<MapSelect/>}/>
      <Route path="/Gamecube" element={<Gamecube/>}/>
      <Route path="/Ps2" element={<Ps2/>}/>
      <Route path="/Xbox" element={<Xbox/>}/> 
      </Routes>
    </div>
  )
}

export default App