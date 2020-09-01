import React, {useContext} from 'react';
import {ContextStore} from "./ContextStore"




export default function Artwork() {

    
    const {photo, setNewPhoto, artist, artTitle} = useContext(ContextStore) 

 
        return (
            <div>
                <img className="photo" src={photo} alt="" />
                <h4 className="artist"> <span className= "artTitle">{artTitle}</span> {artist}</h4>
                <button onClick={setNewPhoto} className="button">New Art</button>
            </div>
        );
    
}

