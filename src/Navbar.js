import React, { Component } from 'react';
//import {Router, Link, Switch } from 'react-router'

class Navbar extends Component {
    render() {
        return (
            <div >
                <ul className="navbar">
                    
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>About</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;