import React,{useContext} from 'react';
import SyllableCounter from "./SyllableCounter"
import {ContextStore} from "./ContextStore"
import Haiku from "./Haiku"


function HaikuForm (props) {
    const {title, poet, lineOne, lineTwo, lineThree, handleSubmit, handleHaiku} = useContext(ContextStore)
        return (
            <div>
                 <form onSubmit={handleSubmit}>
                    <a href="https://poets.org/glossary/haiku">What is a Haiku</a>
                        <br></br>
                    <a href="https://www.howmanysyllables.com/howtocountsyllables">Syllable Rules: How to Count Syllables</a>
                        <hr></hr> 
                    <SyllableCounter />
                        <hr></hr>
                    <input name="title"onChange={handleHaiku} value={title} placeholder="Haiku Title"></input>
                        <br></br>
                    <input name="poet" onChange={handleHaiku} value={poet} placeholder="Poet's Name"></input>
                        <br></br>
                    <input onChange={handleHaiku} value={lineOne} style={{width: "300px"}}name="lineOne" placeholder="Type in a line of words with a total of 5 syllables"></input>
                        <br></br>
                    <input onChange={handleHaiku} value={lineTwo} style={{width: "300px"}}name="lineTwo" placeholder="Type in a line of words with a total of 7 syllables"></input>
                        <br></br>
                    <input onChange={handleHaiku} value={lineThree} style={{width: "300px"}}name="lineThree" placeholder="Type in a line of words with a total of 5 syllables"></input>
                        <br></br>
                    <button className="button">submit</button>
                </form>
                <Haiku />
            </div>
        );
    
}

export default HaikuForm