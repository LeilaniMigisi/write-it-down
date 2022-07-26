import React , {useState} from 'react'
 function AddNote ({handleAddNote}) {
    const [noteText , setNoteText] = useState('')
    const charLimit = 300;
    const handleChange =( event )=>{
        if (charLimit - event.target.value.lengh>=0){
            setNoteText(event.target.value)
        }
    
 }
 }