import React from 'react';





function  Haiku (props) {
    
    const { title,  poet, lineOne, lineTwo, lineThree, } = props
   
        return (
          
            <div className="haikuText">
               
                <h3 name="title" >{title}</h3>
                <h4>{poet}</h4>
                <p>{lineOne}</p>
                <p>{lineTwo}</p>
                <p>{lineThree}</p>
                
            </div>
           
        );
    
}

export default Haiku ;