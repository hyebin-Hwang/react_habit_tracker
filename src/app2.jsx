import React, { Component } from "react";
import Habit from "./habit";
import HabitForm from "./habitForm";
import Navbar from "./nav";

class App2 extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "coding", count: 0 },
      { id: 3, name: "Running", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      const count = habit.count;
      if (item.id === habit.id) {
        return { ...habit, count: count > 0 ? count - 1 : 0 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleTrash = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          sum={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitForm onSubmit={this.handleSubmit} onAdd={this.handleAdd} />
        <ul>
          {this.state.habits.map((habit, index) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onTrash={this.handleTrash}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default App2;
