import React from 'react';
import './App.css';
import axios from 'axios';
import icons from './assets/icons.json'
import { useState, useEffect } from 'react';
import Gallery from './components/gallery/Gallery';


function App() {

  return (
    <>
    <Gallery />
    </>
  );
}

export default App;
