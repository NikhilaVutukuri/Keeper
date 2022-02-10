import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote]=useState({
    title : "",
    content : ""
  });
  const [notes, setNotes] = useState([]);
  function handleChange(event){
    const {name,value} = event.target;
    setNote(prev => {
      if(name==="title"){
        return {
          title : value,
          content : prev.content
        }
      }
      else if(name === "content"){
        return {
          title : prev.title,
          content : value
        }
      }

    });
  }
  function addNote(event){
    setNotes(prev => [...prev, note]);
    setNote({
      title :"",
      content : ""
    });
    event.preventDefault();
  }
  function deleteNote(id){
    setNotes(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea title = {note.title} content={note.content} handleChange={handleChange} addNote = {addNote}/>
      {notes.map((note,index) => <Note key={index} id={index} title={note.title} content={note.content} deleteNote = {deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
