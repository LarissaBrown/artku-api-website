import React from 'react';
import Navbar from "./Navbar";
import ArtIndex from "./ArtIndex";
import HaikuForm from "./HaikuForm";
import Haiku from"./Haiku";
import Artwork from "./Artwork";
import 'fontsource-roboto'; 
import "./Style.css";
import { Route } from 'react-router-dom'







function App() {
  
  return (
    
    <div className="App">
        <Route exact path='/'>
        <App/>
        </Route>
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

