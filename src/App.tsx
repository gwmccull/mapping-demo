import React from 'react';
import './App.css';
import Home from './features/home/Home';

/** 
 * @description New Wanders Mapping Demo
 * @todo Restructure app to have it's own data structure, independent of the mapping service
 * @todo Extract Stop Solver and make it so it uses Wanders data structures
 * @todo Create a Wanders marker interface for use in generating actual markers using a mapping service
 */

function App() {
  return (
    <div>
      <Home title="New Wanders Mapping Demo" /> 
    </div>
  )
}

export default App;
