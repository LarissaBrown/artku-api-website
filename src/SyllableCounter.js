
import React, {useContext} from "react"
import {ContextStore} from "./ContextStore"


export default function SyllableCounter(){

    const { setSyllableCounterWord, count1,  syllableCounterWord, handleChange, setCount1,  } = useContext(ContextStore) 
    return (
        <div >
            <input  name="syllableCounterWord" 
                value={syllableCounterWord}
                onChange={(e)=>handleChange(e.target.value, setSyllableCounterWord)} 
                placeholder="Type a word.">
            </input>
            <p className="count" name="count1" 
                value={count1} 
                onChange={(e)=> handleChange(e.target.value, setCount1)} 
                placeholder="count of five syllables">{count1 === ""? "number of" : count1} syllables
            </p>  
           
        </div>

    )
}





