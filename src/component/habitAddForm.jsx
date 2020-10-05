import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef(); // 바로 DOM요소에 접근하는게 아니라  필요할때 리액트에서 제공하는
  // 멤버변수로 정의한다음에 ref로 연결하면 된다.
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="addForm" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
