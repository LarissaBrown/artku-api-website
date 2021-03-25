import React, { Component } from 'react';
import {Router, Link, Switch } from 'react-router'

class Navbar extends Component {
    render() {
        return (
            <div >
                <Switch>
                <ul className="navbar">
                    <Route exact path='/' render={

                       <li><Home />HOME</li> 
                    }/>
                    
                    <Route exact path='/gallery' render={

                        <li><Gallery />Gallery</li> 
                    }/>
                    <Route exact path='/about' render={

                        <li><About />About</li> 
                    }/>
                   
                </ul>
                </Switch>
            </div>
        );
    }
}

export default Navbar;