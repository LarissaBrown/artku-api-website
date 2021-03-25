import React, {useState, useEffect, useCallback} from "react";
import axios from "axios"
import _ from "lodash"


const ContextStore = React.createContext();


function ContextStoreProvider (props) {
    //const [gallery, setGallery] = useState("");
    const [title, setTitle] = useState("");
    const [lineOne, setLineOne] = useState("");
    const [lineTwo, setLineTwo] = useState("");
    const [lineThree, setLineThree] = useState("");
    const [poet, setPoet] = useState("");
    const [photo, setPhoto] = useState("https://images.unsplash.com/photo-1578321926534-133bb2a9f080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    const [word] = useState("");
    const [wordSyll] = useState("");
    const [inputWord, setInputWord] = useState("");
    const [count1, setCount1] = useState("");
    const [objectId, setObjectId] = useState(''); 
    const [artTitle, setArtTitle] = useState("No Title");
    const [artist, setArtist] = useState("Unknown Artist");
    const [syllableCounterWord, setSyllableCounterWord] = useState("")    
   




    useEffect((props)=> {
        if(!objectId){
            axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?q=hasImages=true&modern/"+ randomNum())
                .then (response => {
                    console.log(randomNum())
                  
                    console.log(response.data.objectIDs[Math.floor(Math.random()* response.data.objectIDs.length)])
    
                    setObjectId(response.data.objectIDs[Math.floor(Math.random()* response.data.objectIDs.length)])
                })   
        }     
    },[objectId])



    function randomNum(){
       return Math.floor(Math.random() * 1000)
       
    }


    function setNewPhoto(event) {
        if (objectId){
            
            axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+ objectId)
                .then (response => {
                    console.log(response.data, 'response')
                    setPhoto(response.data.primaryImage)
                    setArtTitle(response.data.title)
                    setArtist(response.data.artistDisplayName)
                    setObjectId('')
                }
            )
        }
     }
    
     
    const delayedApiWord = useCallback(_.debounce(word => sendWordToApi(word), 1000), [])

    function sendWordToApi(word) {
       
            axios.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+ word +"?key=83d572be-cfd5-46ac-b1d9-336a1f275deb")
            .then(response => {

                console.log(wordSyll)
                setCount1(response.data[0].hwi.hw.split("*").length)
            
            }) 
    
        console.log(count1)
    }   
    function handleChange(value, setSyllableCounterWord ) {

        setSyllableCounterWord(value)
        
        if(value.match(/^[A-Za-z]+$/)) {
             delayedApiWord(value)
             return true
        }else{
            alert("please only enter one word, no symbols or numbers")
            return false
        }
    
    }
    
    //onChange function 
    function handleHaiku(event){

        const {value} = event.target.value
        
        setTitle(value)
        setPoet(value)
        setLineOne(value)
        setLineTwo(value)
        setLineThree(value) 
        

    }
    function handleSubmit(event){
        event.preventDefault()
       
       
    }

    function handleClear(event){
        event.preventDefault()
        setSyllableCounterWord("")
        setCount1("")
    }
    
    return (
        <ContextStore.Provider
            value = {{
                handleHaiku,
                handleChange,
                handleSubmit,
                handleClear,
                setSyllableCounterWord,
                syllableCounterWord,
                delayedApiWord,
                setCount1,
                setLineOne,
                setLineTwo,
                setLineThree,
                photo,
                artist, 
                artTitle,
                wordSyll,  
                setNewPhoto,
                //gallery, 
                title,
                setTitle, 
                lineOne, 
                lineTwo, 
                count1,
                lineThree, 
                poet,
                setPoet, 
                word, 
                inputWord, 
                setInputWord}}>
                {props.children}
                    
        </ContextStore.Provider>    
    )
            }
export  {ContextStore, ContextStoreProvider}
