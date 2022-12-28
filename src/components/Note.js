import * as React from 'react';
const colors = ["red", "blue", "purple", "green", "yellow", "orange"];

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      text: "",
      textarea: null,
      background: "",
    };

    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onColourChanged = this.onColourChanged.bind(this);
  }

  onEdit() {
    this.setState({
      isEdit: true,
    });
    setTimeout(() => {
      this.setState({
        textarea: document.getElementById("myTextarea"),
      });
    }, 0);
  }

  onSave() {
    let text = this.state.isEdit ? this.state.textarea.value : this.state.text;

    if (this.state.isEdit) {
      text = document.getElementById("myTextarea").value;
    }

    this.setState({
      isEdit: false,
      text,
    });
  }

  
  onDelete() {
    this.props.delete();
  }

  onColourChanged() {
    const color = colors[Math.floor(Math.random() * (colors.length - 0) + 0)];
    this.setState({
      background: `background-color-${color}`,
    });
  }

  render() {
    return (
      <div class={`Note ${this.state.background}`}>
        <h1>Note Is Working</h1>
        <div>
          {this.state.isEdit && <button onClick={this.onSave}>save</button>}
          {!this.state.isEdit && <button onClick={this.onEdit}>edit</button>}
          {!this.state.isEdit && (
            <button onClick={this.onColourChanged}>change background</button>
          )}
           {!this.state.isEdit && (
            <button onClick={this.onDelete}>delete</button>
          )}
        </div>
        <div>
          {this.state.isEdit && (
            <textarea id="myTextarea">{this.state.text}</textarea>
          )}
          {!this.state.isEdit && <p>{this.state.text}</p>}
        </div>
      </div>
    );
  }
}


