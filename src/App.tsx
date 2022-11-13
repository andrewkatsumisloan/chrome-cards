import React from 'react';
import Home from './Components/Home/Home';
import Stack from './Components/Stack/Stack';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <h1 className='app-header'> Chrome Cards </h1>
        {/* <h2> Under Development — A Chrome Extension for Flashcards </h2> */}
      </div>
      {/* <Home /> */}
      <Stack />
    </div>
  );
}

export default App;
