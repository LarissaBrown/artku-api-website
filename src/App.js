import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import ArtIndex from './ArtIndex'


function App() {
  
  return (
    
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/art-index'>
          <ArtIndex/>
        </Route>
      </Switch>
    </div>
 
   
  )
}

export default App;

