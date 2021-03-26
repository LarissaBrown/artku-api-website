import React, {useContext} from 'react'
import {ContextStore} from './ContextStore'
import Haiku from './Haiku'



function Gallery(props){

    const { gallery } = useContext(ContextStore)

    return (
        <>
        { gallery.map((haiku => 
            <Haiku 
                title={haiku.title} 
                poet={haiku.poet} 
                lineOne={haiku.lineOne} 
                lineTwo={haiku.lineTwo} 
                lineThree={haiku.lineThree} 
                artist={haiku.artist} 
                photo={haiku.photo}/>))}
        </>
    )
}

export default Gallery