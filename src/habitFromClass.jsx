class HabitForm extends PureComponent {
  inputRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="habit-form" onSubmit={this.handleSubmit}>
        <input type="text" className="habit-input" ref={this.inputRef} />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitForm;
