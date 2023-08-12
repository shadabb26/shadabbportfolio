import './App.css';
import React from 'react'
import Navbar from './Components/Navbar.js'
import Section from './Components/Section.js';
import Image from './Components/Image';

import Maincontent from './Components/Maincontent';




function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Image/>
     <Section/>
     <div className="container my-2">
      <div className="container">
      <hr></hr>
      </div>
      
     </div>
    
     <Maincontent/>
     
     
     
    </div>
  );
}

export default App;
