import React, {useContext} from 'react'
import ContextStore from './ContextStore'



function Gallery(props){

    const { gallery } = useContext(ContextStore)

    return (
        <>
        {gallery.map((haiku => <Haiku />))}
        </>
    )
}