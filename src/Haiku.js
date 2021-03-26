import React,{useContext} from 'react';
import {ContextStore} from "./ContextStore"




function  Haiku (props) {
    
    const { inputs } = useContext(ContextStore) 
   
        return (
          
            <div className="haikuText">
               
                <h3 name="title" >{inputs.title}</h3>
                <h4>{inputs.poet}</h4>
                <p>{inputs.lineOne}</p>
                <p>{inputs.lineTwo}</p>
                <p>{inputs.lineThree}</p>
                
            </div>
           
        );
    
}

export default Haiku ;