import React, { useState } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import YearInterface from './components/YearInterface';
import TitleHeading from './components/TitleHeading';
import Footer from './components/Footer';

function App() {

  const [currentMap, setCurrentMap] = useState(2019)

  return (
    <div className="App">
      <TitleHeading />
      <MapContainer currentMap={currentMap} />
      
      <YearInterface currentMap={currentMap} setCurrentMap={setCurrentMap}/>
      
      <Footer />
    </div >
  );
}

export default App;
