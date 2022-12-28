import React, { Component } from "react";
import Note from "./components/Note";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      notes: ["12345678", "546328"],
    };

    this.addNote = this.addNote.bind(this);
    this.renderNodeElement = this.renderNodeElement.bind(this);
   }

    addNote() {
      this.setState({
        notes: this.state.notes.concat(new Date().getTime()),
      });
    }

    deleteNote(removedId) {
      this.setState({
        notes: this.state.notes.filter((id) => id != removedId),
      });
    }


    renderNodeElement(id) {
      return (
        <div>
          <Note
            id={id}
            delete={() => {
              this.deleteNote(id);
            }}
          />
        </div>
      );
    }

    render() {
      return (
        <div>
          <h1>Notes App</h1>
          <div>
            <button onClick={this.addNote}>Add Note</button>
          </div>
          <div>
            {this.state.notes.map((id) => (
               <Note
                id={id}
                delete={() => {
                  this.deleteNote(id);
                }}
             />
            ))}
        </div>
      </div>
    );
  }
}
