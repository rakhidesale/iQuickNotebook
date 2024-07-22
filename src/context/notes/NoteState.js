import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    /*const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
    }*/
   const notesInitial = [
    {
      "_id": "66951ad686bcca1a88f7e8f1",
      "user": "6694ecd1d8b443660890f698",
      "title": "Learn Python",
      "description": "An introductory course on Python programming.",
      "tag": "programming",
      "date": "2024-07-15T12:49:26.191Z",
      "__v": 0
    },
    {
      "_id": "66979bf2c08a516f68c44938",
      "user": "6694ecd1d8b443660890f698",
      "title": "Mastering Data Science",
      "description": "Advanced techniques and tools for data analysis.",
      "tag": "data science",
      "date": "2024-07-17T10:24:50.361Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState