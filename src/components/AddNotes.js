import React,{useState} from 'react'

function AddNote({handleAddNote}) {
    const [noteText,setNoteText] = useState('');
    const charLimit = 300;
    const handleChange =(event)=>{
    if(charLimit - event.target.value.length>=0){
        setNoteText(event.target.value)
    }
}
   
    }
    
    const handleSaveClick =() =>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
	}