import React from 'react';
import Navbar from "./Navbar";
import ArtIndex from "./ArtIndex";
import HaikuForm from "./HaikuForm";
import Artwork from "./Artwork";
import 'fontsource-roboto'; 
import "./Style.css";








function App() {
  
  return (
    
    <div className="App">npm 
        <Navbar/>
        <header >Artku Random Haiku</header>
        <div></div>
        <div></div>
        <Artwork />
        <div></div>
        <div></div>
        <HaikuForm />
        <ArtIndex />
       
    </div>
 
   
  )
}

export default App;

