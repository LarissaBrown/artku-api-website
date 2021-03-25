import React,{useContext} from 'react';
import {ContextStore} from "./ContextStore"




function  Haiku (props) {
    
    const {title,  poet, lineOne, lineTwo, lineThree, } = props
   
        return (
          
            <div>
               
                <h3 name="title" >{title}</h3>
                <h4>{poet}</h4>
                <p>{lineOne}</p>
                <p>{lineTwo}</p>
                <p>{lineThree}</p>
                
            </div>
           
        );
    
}

export default Haiku ;