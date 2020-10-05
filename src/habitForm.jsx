import React, { memo } from "react";

const HabitForm = memo((props) => {
  const inputRef = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };
  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input type="text" className="habit-input" ref={inputRef} />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitForm;
