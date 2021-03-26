import React from 'react';
import Navbar from "./Navbar";
import ArtIndex from "./ArtIndex";
import HaikuForm from "./HaikuForm";
import Haiku from './Haiku';
import Artwork from "./Artwork";
import 'fontsource-roboto'; 
import "./Style.css";

function App() {
  
  return (
    
    <div className="App">
        <Navbar/>
        <header >Artku Random Haiku</header>
        <div></div>
        <div></div>
        <Artwork />
        <div></div>
        <div></div>
        <HaikuForm />
        <ArtIndex />
        <Haiku />
    </div>
 
   
  )
}

export default App;

