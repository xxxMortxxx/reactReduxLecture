
import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';

class TodoList extends React.Component {
  state = {
    newTodoText: '',
  };

  changeHandler = (event) => {
    this.setState({ newTodoText: event.target.value });
  };

  clickHandler = () => {
    this.props.addTodoAction(this.state.newTodoText);
  };

  render() {
    const todos = this.props.todos.map(todo => (
      <li
        className="todo-item"
        key={todo.id}
      >
        {todo.text}
      </li>
    ));

    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.newTodoText}
          onChange={this.changeHandler}
        />
        <button onClick={this.clickHandler}>Add</button>
        <ul>
          {todos}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = {
  addTodoAction: addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);