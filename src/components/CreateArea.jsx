import React from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange = {props.handleChange} name="title" placeholder="Title" value = {props.title}/>
        <textarea onChange = {props.handleChange} name="content" placeholder="Take a note..." rows="3" value={props.content}/>
        <button onClick = {props.addNote}>
        <AddIcon/>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
