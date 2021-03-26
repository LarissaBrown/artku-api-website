import React from 'react';
import { useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"

function Navbar(props) {
    console.log(props)
    
        return (
            <div >
                <ul className="navbar">
                    
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>About</li>
                    <li>Art Index</li> 
                    
                </ul>
            </div>
        );
    
}

export default Navbar;