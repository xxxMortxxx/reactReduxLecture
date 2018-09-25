
import React from 'react';
import { connect } from 'react-redux';

import { addTodo, getTodos, setTodosSearchText } from '../../actions';

class TodoList extends React.Component {
  state = {
    newTodoText: '',
  };

  componentDidMount() {
    this.props.getTodosAction();
  }

  changeHandler = (event) => {
    this.setState({ newTodoText: event.target.value });
  };

  inputKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  };

  clickHandler = () => {
    this.addTodo();
  };

  searchChangeHandler = (event) => {
    this.props.setTodosSearchTextAction(
      event.target.value
    );
  };

  addTodo = () => {
    if (this.state.newTodoText.trim() === '') return;
    this.props.addTodoAction(this.state.newTodoText);
    this.setState({
      newTodoText: '',
    });
  };

  render() {
    const todos = this.props.todos.map(todo => (
      <li
        className="todo-item"
        key={todo.id}
      >
        {todo.title}
      </li>
    ));

    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.newTodoText}
          onChange={this.changeHandler}
          onKeyPress={this.inputKeyPressHandler}
        />
        <button onClick={this.clickHandler}>Add</button>
        <input
          type="search"
          value={this.props.searchText}
          onChange={this.searchChangeHandler}
        />
        <ul>
          {todos}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ todos }) => ({
  ...todos,
  todos: todos.todos.filter((todo) => todo.title.includes(todos.searchText)),
});
const mapDispatchToProps = {
  addTodoAction: addTodo,
  getTodosAction: getTodos,
  setTodosSearchTextAction: setTodosSearchText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);