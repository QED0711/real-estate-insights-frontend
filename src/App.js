import React, { useState } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import YearInterface from './components/YearInterface';

function App() {

  const [currentMap, setCurrentMap] = useState(2019)

  return (
    <div className="App">
      <header className="title-heading">
        <h3>How have D.C. home prices changed since 2000?</h3>
        <p>Median home value by year separated by zipcode*</p>
      </header>
      <MapContainer currentMap={currentMap} />
      
      <YearInterface currentMap={currentMap} setCurrentMap={setCurrentMap}/>
      
      <footer className="notes-footer">
        <div className='notes'>
          <p>*zipcode omitted when data not collected for that year</p>
        </div>

        <div className="citation">
          <p className="author-footer">Quinn Dizon</p>
          <p className="source-footer">Source: <a href="https://www.zillow.com/research/data/" target="_blank">Zillow economic data</a></p>
        </div>
      </footer>
    </div >
  );
}

export default App;
